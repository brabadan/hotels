const fileupload = require('express-fileupload');
const config = require('../../config/index');

// Переводим объект files, содержащий файлы и массивы файлов в rawArr
function files2fileArr(files) {
    let fileArr = [];
    // цикл проходит по ключам первичного files, а также по вложенному массиву
    for (let key in files) {
        const file = files[key];
        if (!file) continue;
        // Если под одним ключем несколько файлов - рекурсия
        if (file instanceof Array) {
            fileArr = fileArr.concat(files2fileArr(file));
            continue;
        }
        // Иначе если под этим ключем одиночный файл - продолжаем
        if (!file.mimetype.includes('image')) {
            console.log(`file: ${file.name} не картинка`);
            continue;
        }
        if (file.truncated) {
            console.log(`file: ${file.name} - превышен размер`);
            continue;
        }

        fileArr.push(file);
    }
    return fileArr;
}

// Проверяем загруженные файлы картинок и возвращаем массив
function getReqFileArr(req) {
    const files = req.files;
    if (!files || Object.keys(files).length === 0) {
        throw ('нет файлов для загрузки');
    }
    // Создаем массив изобр. для записи в Коллекцию + createdBy
    // т.к. под одним ключём в files моет быть массив файлов
    // переводим files в простой массив файлов
    const fileArr = files2fileArr(files).map(raw => ({
        ...raw,
        createdBy: req.session.user._id
    }));

    if (fileArr.length === 0) {
        throw('Файлы картинок не проходят проверку');
    }

    return fileArr;
}

module.exports = function (app, Model) {
    const options = {
        limits: {
            fileSize: 10 * 1024 * 1024
        }
    };

    // По картинке возвращаем промис ее загрузки
    function image2Promise(image) {
        return new Promise((resolve, reject) => {
            const where = { md5: image.md5() };
            image.md5 = where.md5;
            const options = { new: true, upsert: true };
                Model.findOneAndUpdate(where, image, options, function (err, result) {
                    if (err) reject(err);
                    resolve(result._doc._id);
                })
        })
    }

    // Загрузка картинок с проверкой MD5
    function uploadImages(images) {
        return new Promise((resolve, reject) => {
            if (! images instanceof Array || images.length === 0) resolve([]);
            const promises = [];
            for (let image of images) {
                const promise = image2Promise(image);
                promises.push(promise);
            }
            Promise.all(promises)
                .then(idArr => {
                    resolve(idArr)
                })
                .catch(err => {
                    reject(err)
                })
        });
    }

    // middleware для удобства загрузки файлов на сервер
    app.use(fileupload(options));

    // Загружаем картинки в Коллекцию
    app.post(config.app_path + config.image_collection, (req, res) => {
        try {
            const imageArr = getReqFileArr(req);

            // Вставляем картинки и возвращаем массив их _id
            uploadImages(imageArr)
                .then(result => {
                    res.send({ res: result });
                })
                .catch(err => {
                    res.send({ err });
                })
        } catch(err) {
            res.send( { err });
        }

    });

    // Замена картинки по _id
    app.put(config.app_path + config.image_collection + '/:id', (req, res) => {
        const id = req.params.id;
        const options = { upsert: true };
        try {
            const imageArr = getReqFileArr(req);
            // Заменяем картинку в Коллекции, возвращаем значение err
            uploadImages(imageArr)
                .then(result => {
                    res.send({ res: result });
                })
                .catch(err => {
                    res.send({ err });
                });
        } catch (err) {
            res.send({ err });
        }
    });

    // Получаем картинку по _id
    app.get(config.app_path + config.image_collection + '/:id', (req, res) => {
        Model.findById(req.params.id, (err, image) => {
            if (err || !image || !image.data) return res.status(404).send('image not found...');
            res.send(image.data);
        })
    });

};

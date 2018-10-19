const fileupload = require('express-fileupload');
const config = require('../../config/index');

function getRawArr(files) {
    let rawArr = [];
    for (let key in files) {
        const file = files[key];
        console.log(file, '= file');
        if (!file) continue;
        // Если под одним ключем несколько файлов
        if (file instanceof Array) {
            rawArr = rawArr.concat(getRawArr(file));
            continue;
        }
        // Иначе если под этим ключем одиночный файл
        if (!file.mimetype.includes('image')) {
            console.log(`file: ${file.name} не картинка`);
            continue;
        }
        if (file.truncated) {
            console.log(`file: ${file.name} truncated`);
            continue;
        }

        let raw = {
            name: file.name,
            data: file.data,
            mimeType: file.mimetype,
            md5: file.md5()
        };
        rawArr.push(raw);
    }
    return rawArr;
}

module.exports = function(app, Model) {
    const options = {
        limits: {
            fileSize: 10 * 1024 * 1024
        }
    };
    app.use(fileupload(options));

    // Загружаем картинки
    app.post(config.app_path + 'images', (req, res) => {
        const files = req.files;
        console.log(files);
        if (!files || Object.keys(files).length === 0) {
            return res.send({ err: 'нет файлов для загрузки' })
        }
        // Создаем массив изобр. для записи в Коллекцию
        const rawArr = getRawArr(files);

        if (rawArr.length === 0) {
            return res.send({ err: 'Файлы картинок не проходят проверку' })
        }

        Model.insertMany(rawArr, function(err, images) {
            if (err) return res.send({ err });

            const result = images.map(image => image._id);
            res.send({ err, res: result });
        })
    });
    // Возвращаем картинку
    app.get(config.app_path + 'images/:id', (req, res) => {
        Model.findById(req.params.id, (err, image) => {
            if (err) return res.status(404).send('image not found...');
            res.send(image.data);
        })
    });

};

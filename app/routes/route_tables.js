/**
 * Обработчик результата выборки из Коллекции
 * @param req - объект принятого от клиента запроса
 * @param res - объект для отправки клиенту ответа
 * @param err - объект ошибки(если есть)
 * @param result - результат, возвращаемый клиенту
 */
function collectionProcess(req, res, err, result) {
    if (err) console.error(err); // Ошибку выводим в консоль сервера(пока вместо логирования)
    res.send({err, req: req.body, result}); // отправляем данные клиенту
}

/**
 * Очищаем принятую от клиента запись от ненужных полей(чтоб заполнить их через mongoose)
 * @param reqBodyRow - Принятая от клиента запись(строка)
 * @returns {*} - очищенная запись(строка)
 */
function reqBodyRow2ClearRow(reqBodyRow) {
    const clearRow = reqBodyRow;
    delete clearRow._id;
    delete clearRow.updatedAt;
    delete clearRow.createdAt;
    delete clearRow.createdBy;
    return clearRow;
}

module.exports = function (app, mongoose) {

    const db = mongoose.connection;
    const Schema = mongoose.Schema;
    const ObjectID = require('mongodb').ObjectID;
    // Структура Коллекций Базы Данных
    const structures = require('../../config/structures');
    const config = require('../../config/index'); // Конфигурации программы

    // Цикл по Коллекциям БД - для каждой строим Модель и обработчики
    for (let structure of structures) {
        const collection = structure.collection;
        // Добавляем в Схему поле-ссылку на Пользователя - createdBy
        const fixedSchema = {
            ...structure.schema,
            createdBy: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        };
        // Создаем МодельСхему с полями createdAt & updatedAt
        const modelSchema = new mongoose.Schema(fixedSchema, {timestamps: true});

        // Если в Коллекции есть виртуальные поля
        if (structure.virtuals) {
            modelSchema.set('toObject', {virtuals: true});
            modelSchema.set('toJSON', {virtuals: true});
            // Добавить в схему все виртуальные поля
            Object.keys(structure.virtuals).forEach(fieldName => {
                const func = structure.virtuals[fieldName];
                modelSchema.virtual(fieldName).get(func);
            });
        }

        // Создаем Модель коллекции по МодельСхеме
        const Model = mongoose.model(collection, modelSchema);


        // !!! Контроль прав текущего пользователя на текущую коллекцию
        app.all(config.app_path + collection + '*', (req, res, next) => {
            if (structure.rightsRequired && req.session.user.rights.indexOf(structure.rightsRequired) < 0) {
                // Нет необходимых прав
                res.send({err: 403, req: req.body, res: 'Нет необходимых прав'});
            } else {
                next();
            }
        });


        // Количество записей в Коллекции
        app.get(config.app_path + collection + '/count', (req, res) => {
            db.collection(collection)
                .find()
                .count((err, count) => {
                    collectionProcess(req, res, err, count)
                })
        });
        // Возвращаем массив всей Коллекции - для реляц. полей: rooms.hotel_id -> hotels
        app.get(config.app_path + collection + '/toarray', (req, res) => {
            db.collection(collection)
                .find()
                .toArray((err, result) => {
                    collectionProcess(req, res, err, result)
                })
        });
        // Возвращаем страницу Пагинации Коллекции
        app.get(config.app_path + collection + '/page/:page/perpage/:perpage', (req, res) => {
            const limit = +req.params.perpage;
            const skip = (req.params.page - 1) * limit;
            // Получаем список возвращаемых полей(столбцов)
            const fields2Return = req.query.fields || '';
            // Поиск и передача результата в обработчик collectionProcess()
            Model
                .find({}, fields2Return)
                .skip(skip)
                .limit(limit)
                // .toArray((err, result) => {
                .exec((err, result) => {
                    collectionProcess(req, res, err, result);
                });
        });
        // Удаляем запись в Коллекции - под вопросом
        app.delete(config.app_path + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            db.collection(collection).remove(where, (err, result) => {
                collectionProcess(req, res, err, result);
            })
        });

        // Обработка картинок
        if (collection === config.image_collection) {
            require('./images')(app, Model);
            continue
        }

        // Добавление новой записи в Коллекцию
        app.post(config.app_path + collection, (req, res) => {
            const row = reqBodyRow2ClearRow(req.body);
            // Добавляем в запись Пользователя, кто создает запись
            row.createdBy = req.session.user._id;
            Model.create(row, (err, result) => {
                collectionProcess(req, res, err, result)
            })
        });
        // Возвращаем запись Коллекции по _id
        app.get(config.app_path + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            db.collection(collection).findOne(where, (err, item) => {
                collectionProcess(req, res, err, item);
            })
        });
        // Заменяем запись в Коллекции
        app.put(config.app_path + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            const row = reqBodyRow2ClearRow(req.body);
            // db.collection(collection).replaceOne
            Model.updateOne(where, row, (err, result) => {
                collectionProcess(req, res, err, result);
            })
        });
    }
}
;

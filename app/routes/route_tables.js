function collectionProcess(req, res, err, result) {
    if (err) console.error(err);
    res.send({err, req: req.body, result})
}

function modifyRow(reqBody) {
    const row = reqBody;
    delete row._id;
    delete row.updatedAt;
    delete row.createdAt;
    delete row.createdBy;
    return row;
}

module.exports = function (app, mongoose) {
    const db = mongoose.connection;
    const Schema = mongoose.Schema;
    const ObjectID = require('mongodb').ObjectID;
    const structures = require('../../config/structures');
    const config = require('../../config/index');

    for (let structure of structures) {
        const collection = structure.collection;
        // Добавляем в Схему ссылку на создавшего Пользователя - createdBy
        const fixedSchema = {
            ...structure.schema,
            createdBy: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        };
        // Создаем МодельСхему с полями createdAt & updatedAt
        const modelSchema = new mongoose.Schema(fixedSchema, {timestamps: true});
        // Добавить в схему виртуальные поля
        if (structure.virtuals) {
            modelSchema.set('toObject', {virtuals: true});
            modelSchema.set('toJSON', {virtuals: true});

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
            // db.collection(collection)
            Model
                .find({})
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
            const row = modifyRow(req.body);
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
            const row = modifyRow(req.body);
            // db.collection(collection).replaceOne
            Model.updateOne(where, row, (err, result) => {
                collectionProcess(req, res, err, result);
            })
        });
    }
}
;

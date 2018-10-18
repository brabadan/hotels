function collectionProcess(req, res, err, result) {
    if (err) console.error(err);
    res.send({err, req: req.body, result})
}

module.exports = function (app, mongoose) {
    const db = mongoose.connection;
    const ObjectID = require('mongodb').ObjectID;
    // const tables = require('../../tables');
    const structures = require('../../config/structures');
    const config = require('../../config/index');

    // for (let table of tables) {
    for (let structure of structures) {
        const collection = structure.collection.trim();
        const modelSchema = mongoose.Schema(structure.schema, { timestamps: true });
        const Model = mongoose.model(collection, modelSchema);
        // контроль прав пользователя на таблицу
        app.all(config.app_path + collection + '*', (req, res, next) => {
            if (structure.rightsRequired && req.session.user.rights.indexOf(structure.rightsRequired) < 0) {
                // Нет необходимых прав
                res.send({err: 403, req: req.body, res: 'Нет необходимых прав'});
            } else {
                next();
            }
        });
        app.post(config.app_path + collection, (req, res) => {
            // db.collection(collection).insertOne
            Model.create(req.body, (err, result) => {
                collectionProcess(req, res, err, result)
            })
        });
        app.get(config.app_path + collection + '/count', (req, res) => {
            db.collection(collection)
                .find()
                .count((err, count) => {
                    collectionProcess(req, res, err, count)
                })
        });
        app.get(config.app_path + collection + '/toarray', (req, res) => {
            db.collection(collection)
                .find()
                .toArray((err, result) => {
                    collectionProcess(req, res, err, result)
                })
        });
        app.get(config.app_path + collection + '/page/:page/perpage/:perpage', (req, res) => {
            const limit = +req.params.perpage;
            const skip = (req.params.page - 1) * limit;
            db.collection(collection)
                .find({})
                .skip(skip)
                .limit(limit)
                .toArray((err, result) => {
                    collectionProcess(req, res, err, result);
                });
        });
        app.get(config.app_path + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            db.collection(collection).findOne(where, (err, item) => {
                collectionProcess(req, res, err, item);
            })
        });
        app.put(config.app_path + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            const row = req.body;
            delete row._id;
            delete row.updatedAt;
            delete row.createdAt;
            // db.collection(collection).replaceOne
            Model.updateOne(where, row, (err, result) => {
                collectionProcess(req, res, err, result);
            })
        });
        app.delete(config.app_path + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            db.collection(collection).remove(where, (err, result) => {
                collectionProcess(req, res, err, result);
            })
        })
    }
}
;

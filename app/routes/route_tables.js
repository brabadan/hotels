function collectionProcess(req, res, err, result) {
    if (err) console.error(err);
    res.send({err, req: req.body, result})
}

module.exports = function (app, db) {
    const ObjectID = require('mongodb').ObjectID;
    const tables = require('../../tables');

    for (let table of tables) {
        const collection = table.name.trim();
        // контроль прав пользователя на таблицу
        app.all('/' + collection + '*', (req, res, next) => {
            if (table.rightsRequired && req.session.user.rights.indexOf(table.rightsRequired) < 0) {
                // Нет необходимых прав
                res.send({ err: 403, req: req.body, res: 'Нет необходимых прав' });
            } else {
                next();
            }
        });
        app.post('/' + collection, (req, res) => {
            db.collection(collection).insertOne(req.body, (err, result) => {
                collectionProcess(req, res, err, result)
            })
        });
        app.get('/' + collection + '/count', (req, res) => {
            db.collection(collection)
                .find()
                .count((err, count) => {
                    collectionProcess(req, res, err, count)
                })
        });
        app.get('/' + collection + '/toarray', (req, res) => {
            db.collection(collection)
                .find()
                .toArray((err, result) => {
                    collectionProcess(req, res, err, result)
                })
        });
        app.get('/' + collection + '/page/:page/perpage/:perpage', (req, res) => {
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
        app.get('/' + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            db.collection(collection).findOne(where, (err, item) => {
                collectionProcess(req, res, err, item);
            })
        });
        app.put('/' + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            const row = req.body;
            delete row._id;
            db.collection(collection).replaceOne(where, row, (err, result) => {
                collectionProcess(req, res, err, result);
            })
        });
        app.delete('/' + collection + '/:id', (req, res) => {
            const where = {'_id': new ObjectID(req.params.id)};
            db.collection(collection).remove(where, (err, result) => {
                collectionProcess(req, res, err, result);
            })
        })
    }
}
;

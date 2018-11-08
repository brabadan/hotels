const config = require('../../config/index');

module.exports = function (app, mongoose) {
    const db = mongoose.connection;
    const ObjectID = require('mongodb').ObjectID;


    app.get(config.app_path + 'hotel_full_info/:id', (req, res) => {
        const hotelId = req.params.id;
        let where = { hotel_id : new ObjectID(hotelId) };
        const hotelFullInfo = {};

        db.collection('rooms')
            .find(where)
            .toArray((err, result) => {
                if (err) {
                    res.send({ err });
                    return;
                }
                hotelFullInfo.rooms = result;
                const roomsIdArr = result.map(room => new ObjectID(room._id));
                where = { room_id: { $in: roomsIdArr } };
                console.log(where);
                db.collection('items')
                    .find(where)
                    .toArray((err, result) => {
                        if (err) {
                            res.send({ err });
                            return;
                        }
                        hotelFullInfo.items = result;
                        res.send({ result: hotelFullInfo });
                })
            })
    })
};
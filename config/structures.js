const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = [
    {
        collection: 'users',
        schema: {
            name: {
                type: String,
                required: true
            },
            about_user: String,
            rights: String
        },
        rightsRequired: "A"
    },
    {
        collection: 'hotels',
        schema: {
            name: {
                type: String,
                required: true
            },
            about_hotel: String,
            created_by: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    },
    {
        collection: 'rooms',
        schema: {
            hotel_id: {
                type: Schema.Types.ObjectId,
                ref: 'hotels'
            },
            room_number: {
                type: String,
                required: true,
            },
            about_room: String,
            created_by: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    }
];
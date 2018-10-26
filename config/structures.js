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
            },
            images: [{
                type: Schema.Types.ObjectId,
                ref: 'images'
            }]
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
            images: [{
                type: Schema.Types.ObjectId,
                ref: 'images'
            }],
            photo: {
                type: Schema.Types.ObjectId,
                ref: 'images'
            }
        }
    },
    {
        collection: 'item_models',
        schema: {
            name: {
                type: String,
                required: true
            },
            description: String,
            images: [{
                type: Schema.Types.ObjectId,
                ref: 'images'
            }]
        }
    },
    {
        collection: 'items',
        schema: {
            item_model_id: {
                type: Schema.Types.ObjectId,
                ref: 'item_models'
            },
            room_id: {
                type: Schema.Types.ObjectId,
                ref: 'rooms'
            },
            description: {
                type: String,
                required: true
            },
            images: [{
                type: Schema.Types.ObjectId,
                ref: 'images'
            }]
        }
    },
    {
        collection: 'images',
        schema: {
            name: String,
            data: {
                type: Buffer,
                required: true
            },
            mimeType: {
                type: String,
                required: true
            },
            md5: String,
            description: String
        },
        virtuals: {
            image: function () {
                return this._id
            }
        }
    }
];

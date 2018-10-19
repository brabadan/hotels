const fileupload = require('express-fileupload');

module.exports = function(app) {
    const options = {
        limits: {
            fileSize: 10 * 1024 * 1024
        }
    };
    app.use(fileupload())
};

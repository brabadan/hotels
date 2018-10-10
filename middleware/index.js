const config = require('../config/index')

module.exports = function (app, express) {
    app.use(require('./crossOrigin'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/qwest/', express.static('public/qwest'));
    app.use(config.app_path, express.static('public/hotels'));
};

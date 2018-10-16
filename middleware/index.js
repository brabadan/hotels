const config = require('../config/index');
const express = require('express');

module.exports = function (app) {
    app.use(require('./crossOrigin'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/pyatnashki', express.static('public/pyatnashki'));
    app.use('/rubik', express.static('public/kubik'));
    app.use('/qwest', express.static('public/qwest'));
    app.use(config.app_path, express.static('public/hotels'));
};

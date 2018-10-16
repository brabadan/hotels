const config = require('../config/index');
const express = require('express');

module.exports = function (app) {
    app.use(require('./crossOrigin'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    require('static')(app);
};

// const config = require('../config/index');
const express = require('express');

module.exports = function (app) {
    app.use('/', express.static('public/links'));
    app.use('/pyatnashki', express.static('public/pyatnashki'));
    app.use('/kubik', express.static('public/kubik'));
    app.use('/qwest', express.static('public/qwest'));
    app.use('/tictactoe', express.static('public/tictactoe'));
    app.use('/hotel_admin', express.static('public/hotels'));
    app.use('/test', express.static('public/test'));
};

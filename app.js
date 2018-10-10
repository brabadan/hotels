const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const config = require('./config/index');
// Для функционирования на OpenShift
const server_port = process.env.OPENSHIFT_NODEJS_PORT || config.port;
const server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

require('./middleware')(app, express);

MongoClient.connect(config.db.url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.error(err);

    const db = client.db('hotels');
    // Включаем Аутентификацию
    require('./middleware/Auth')(app, db);

    require('./app/routes')(app, db);
    app.listen(server_port, () => {
        console.log(new Date(), `listening on ${server_port} port, ip = ${server_ip}`);
    });
});

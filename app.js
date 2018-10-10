const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const config = require('./config/index');

require('./middleware')(app, express);

MongoClient.connect(config.db.url, { useNewUrlParser: true }, (err, client) => {
    if (err) return console.error(err);

    const db = client.db('hotels');
    // Включаем Аутентификацию
    require('./middleware/Auth')(app, db);

    require('./app/routes')(app, db);
    app.listen(config.port, () => {
        console.log(new Date(), `listening on ${config.port} port`);
    });
});

const app = require('express')();
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('./config/index');
// Для функционирования на OpenShift
const server_port = process.env.OPENSHIFT_NODEJS_PORT || config.port;
const server_ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

require('./middleware')(app);

// MongoClient.connect(config.db.url, { useNewUrlParser: true }, (err, client) => {

mongoose.connect(config.db.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function () {
    // const db = client.db('hotels');

    app.use(session({
        secret: config.session.secret,
        cookie: config.session.cookie,
        saveUninitialized: true,
        resave: false,
        store: new MongoStore({mongooseConnection: db})
    }));

    // Включаем Аутентификацию
    require('./middleware/Auth')(app, db);

    require('./app/routes')(app, mongoose);
    app.listen(server_port, () => {
        console.log(new Date(), `listening on ${server_port} port`);
    });
});

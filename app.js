const app = require('express')();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('./config/index');
// Для функционирования на OpenShift
const server_port = process.env.OPENSHIFT_NODEJS_PORT || config.port;

// подключаем Статику и настройки
require('./middleware')(app);

// соединяем мангуст с БД
mongoose.connect(config.db.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

// при открытии соединения мангустом
db.once('open', function () {
    // Включаем сессии
    app.use(session({
        secret: config.session.secret,
        cookie: config.session.cookie,
        saveUninitialized: true,
        resave: false,
        store: new MongoStore({mongooseConnection: db})
    }));
    // Подключаем статику
    require('./app/routes/static')(app);
    // Включаем Аутентификацию
    require('./middleware/Auth')(app, db);
    // Включаем маршруты
    require('./app/routes')(app, mongoose);

    // Запускаем сервер
    app.listen(server_port, () => {
        console.log(new Date(), `listening on ${server_port} port`);
    });
});

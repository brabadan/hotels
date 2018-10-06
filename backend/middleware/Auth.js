const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('../config');
const crypto = require('crypto');

function encryptPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);
}

function checkPassword(password, user) {
    return user.hash === encryptPassword(password, user.salt)
}

module.exports = function (app, db) {
    app.use(session({
        secret: config.session.secret,
        cookie: config.session.cookie,
        saveUninitialized: true,
        resave: false,
        store: new MongoStore({db: db})
    }));

    app.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        delete req.session.user;

        db.collection('users')
            .findOne({name: username}, (err, user) => {
                if (err) {
                    console.error(err);
                    res.send({err, req: req.body});
                } else {
                    if (user) {
                        if (checkPassword(password, user)) {
                            req.session.user = user;
                            res.send({err, req: req.body, res: {username, password}});
                            console.log(`finded: ${username}`);
                        } else {
                            res.send({err: 'incorrect password'});
                            console.log(`incorrect password for: ${username}`);
                        }
                    } else if (username === 'admin') {
                        const salt = crypto.randomBytes(16).toString('hex');
                        const hash = encryptPassword(password, salt);
                        const rights = 'A';
                        req.session.user = user;
                        db.collection('users')
                            .insertOne({name: username, salt, hash, rights});
                        res.send({err, req: req.body, res: username});
                        console.log('admin added!!!');
                    } else {
                        res.send({err: 'user not found...'});
                        console.log(`user not found: ${username}`);
                    }
                }
            })
    });

    app.post('/logout', (req, res) => {
        req.session.destroy();
        res.send({ res: 'logged out...' });
    });

    app.get('/login', (req, res) => {
        if (req.session.user) {
            res.send({ res: req.session.user.name })
        } else {
            res.send({ err: 'not logged in' })
        }
    });

    app.use(function (req, res, next) {
        if (req.session.user) {
            console.log('count = ' + ++req.session.count);
            next();
        } else {
            console.log(`Forbidden:`);
            console.log(req.url);
            // res.redirect('/login');
            res.send({err: 403, req: req.body, result: 'Необходимо авторизаваться'});
            // next();
        }
    });
};

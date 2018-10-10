const route_tables = require('./route_tables');

module.exports = function (app, db) {
    route_tables(app, db);
};

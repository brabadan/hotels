const route_tables = require('./route_tables');

module.exports = function (app, mongoose) {
    route_tables(app, mongoose);
};

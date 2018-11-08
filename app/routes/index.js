const route_tables = require('./route_tables');
const hotel_full_info = require('./hotel_full_info');

module.exports = function (app, mongoose) {
    require('./static')(app);
    route_tables(app, mongoose);
    hotel_full_info(app, mongoose);
};

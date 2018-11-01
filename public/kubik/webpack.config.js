var path = require('path');

module.exports = {
    // входная точка нашего приложения
    entry : './main.js',
    output: {
        // результат работы Webpack будет в файле с таким именем
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader'
                // loader: 'url-loader?limit=100000',
            },
            {
                test   : /\.css$/,
                exclude: /node_modules|fonts/,
                loader : 'style-loader!css-loader'
            },
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};
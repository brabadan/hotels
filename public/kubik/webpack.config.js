module.exports = {
    // входная точка нашего приложения
    entry : './main.js',
    output: {
        // результат работы Webpack будет в файле с таким именем
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test   : /\.css$/,
                exclude: /node_modules/,
                loader : 'style-loader!css-loader'
            },
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};
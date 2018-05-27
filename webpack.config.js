var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./resources/assets/App.js','./resources/assets/sass/style.scss'],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'App.js'
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true,
        }),
    ],
}
var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./resources/assets/main.js','./resources/assets/sass/style.scss'],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'main.js'
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
        new ExtractTextPlugin({ // define where to save the file
            filename: 'style.css',
            allChunks: true,
        }),
    ],
}
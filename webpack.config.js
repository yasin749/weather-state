var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['./resources/assets/App.js','./resources/assets/sass/style.scss'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
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
    stats: {
        colors: true
    },
    devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}


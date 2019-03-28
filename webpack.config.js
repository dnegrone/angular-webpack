const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve('dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.(gif|png|jpg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]",
                        outputPath: "dist/img/"
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            cowsay: 'cowsay-browser'
        })
    ]
};
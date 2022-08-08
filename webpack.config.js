const path = require('path')
const HTMLWebpack = require('html-webpack-plugin')
const MiniCSSExtract = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: './assets/[name][ext][query]'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HTMLWebpack({
            template: path.resolve(__dirname, './src/index.html'),
            filename: '[name].html'
        }),
        new MiniCSSExtract({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/i,
                use: [
                    MiniCSSExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }, {
                test: /\.(svg|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            }, {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        port: 3000,
        compress: true,
        hot: true
    }
}
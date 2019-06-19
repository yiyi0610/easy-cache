const path = require('path')
const MyPlugin = require('./src/plugin/nocompress.js')
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        index2: './src/index2.js'
    },
    output: {
        path: path.resolve(__dirname, 'release'),
        publicPath: './release/',
        // filename: '[name].[hash:8].js',
        // sourceMapFilename: '[name].[hash:8].map',
        // chunkFilename: '[id].[hash:8].js'
    },
    plugins:[
        new MyPlugin()
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]

    }

}
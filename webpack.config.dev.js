const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        pathinfo: true,
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }

});

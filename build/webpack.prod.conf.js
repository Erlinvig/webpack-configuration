const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production'
});

module.exports = new Promise((resolve, reject) => {
    resolve(prodWebpackConfig)
});

const CommonConfig = require('./webpack.config.common')
const {merge} = require('webpack-merge')
module.exports = merge(CommonConfig, {
    mode: 'production'
})
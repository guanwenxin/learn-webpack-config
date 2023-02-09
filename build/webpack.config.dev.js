const path = require('path')
const CommonConfig = require('./webpack.config.common')
const {merge} = require('webpack-merge')

module.exports = merge(CommonConfig, {
    mode: 'development',
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000/api',
        },
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, '../public'),
        },
        open: false,
        host: '127.0.0.1',
        port: 8080,
        allowedHosts: 'all',
        client: {
            overlay: {
                errors: true,
            },
            progress: true,
        },
    },
})
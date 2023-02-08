const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
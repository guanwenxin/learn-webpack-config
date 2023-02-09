const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebPackBar = require('webpackbar')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].[contenthash:8].js'
    },
    module: {
        rules: [
            // 处理SFC
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // 处理css
            {
                test: /\.css$/i,
                // loader的处理顺序是从后往前
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            // 处理scss
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
            },
            // 处理图片
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'img/[name].[hash:8][ext]'
                }
            },
            // 处理svg
            {
                test: /\.(svg)(\?.*)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[hash:8][ext]'
                }
            },
            // 处理音视频文件
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                type: 'asset',
                generator: {
                    filename: 'media/[name].[hash:8][ext]'
                }
            },
            // 处理字体文件
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                type: 'asset',
                generator: {
                    filename: 'fonts/[name].[hash:8][ext]'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new WebPackBar(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(false),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css'
        }),
    ],
    devtool: 'source-map',
    // 外部依赖, 1.将vue引入替换成从window对象上获取，2.在index.html中写上cnd链接
    // lodash工具库，axios，elementui
    externalsType: 'window',
    externals: {
        vue: 'Vue'
    },
    optimization: {
        // 自动分包
        splitChunks: {
            cacheGroups: {
                defaultVendors: {
                    name: 'chunk-vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        },

    },
}
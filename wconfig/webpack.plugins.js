const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')

exports.buildPlugs = () => {
    
    return  [
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new HtmlWebpackPlugin({
            title: 'DevWebPack',
            template: './assets/template/index.html',
            filename: 'index.html',
            inject: 'head',      
            minify: false,  
        }),
        new MiniCssExtractPlugin({
            // filename: "./css/[name].[hash].css",
            filename: "./css/[name].min.css",
        }),
        new VueLoaderPlugin(),
    ]
}

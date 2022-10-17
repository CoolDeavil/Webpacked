const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')

exports.buildPlugs = (mode) => {

    let filename_ = '';
    if(mode){
        filename_ = "./css/[name].[fullhash].min.css";
    }else{
        filename_ = "./css/[name].min.css";
    }

    return  [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('5fa3b9'),
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new HtmlWebpackPlugin({
            title: 'WebPacked',
            template: './assets/template/index.html',
            filename: 'index.html',
            inject: 'head',      
            minify: false,  
        }),
        new MiniCssExtractPlugin({
            filename: filename_,
        }),
        new VueLoaderPlugin(),
    ]
}

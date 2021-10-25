
module.exports = {

    presets:[
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react"
    ],
    overrides:[
        {
            plugins:["@vue/babel-plugin-jsx","@babel/plugin-transform-runtime"],
            exclude: [/node_modules/,'./assets/js/'] ,
            test: /\.vue$/,
            plugins: ["@babel/transform-typescript"]
        }
    ],

}
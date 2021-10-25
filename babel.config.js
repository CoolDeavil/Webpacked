
module.exports = {

    presets:[
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react"
    ],
    plugins:["@vue/babel-plugin-jsx","@babel/plugin-transform-runtime"],
    overrides:[
        {
            test: /\.vue$/,
            plugins: ["@babel/transform-typescript"]
        }
    ],

}
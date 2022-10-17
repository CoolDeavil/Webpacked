
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


exports.filters = () => {
    return [
         // Parse Javascript Code
        {
            test: /\.(ts|js)x?$/,
            use: [
                {
                    loader: 'babel-loader',
                }
                ],
            exclude: /node_modules/,
        },
        // parse VUE files
        {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                loaders: {
                    // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
                    css: ['vue-style-loader', {
                        loader: 'css-loader',
                    }],
                    js: [
                        'babel-loader',
                    ],
                },
                cacheBusting: true,
            },
        },
        // Parse Styles
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [["postcss-preset-env",{}]]
                        }
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true,
                        implementation: require("sass")
                    }
                }
            ]
        },
        // Parse Images
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',  //<-- Assets module - asset/resource
            generator: {
              filename: 'images/[name][ext]'
            }
        },
        // Parse Fonts
        {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset',   // <-- Assets module - asset
            parser: {
              dataUrlCondition: {
                maxSize: 8 * 1024 // 8kb
              }
            },
            generator: {  //If emitting file, the file path is
              filename: 'fonts/[name][ext]'
            }
        }      
    ]
}
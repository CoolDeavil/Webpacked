
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


exports.optimizer = () =>{
    return {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.(ts|js)x?$/,
                extractComments: "all",
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: "all",
            minSize: 0,
            maxInitialRequests: 10,
            maxAsyncRequests: 10,
            cacheGroups: {
              vendors: {
                test: /[\\/]node_modules[\\/]/,
                name(module, chunks, cacheGroupKey) {
                  const packageName = module.context.match(
                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                  )[1];
                  return `${cacheGroupKey}.${packageName.replace("@", "")}`;
                }
              },
              common: {
                minChunks: 2,
                priority: -10
              }
            }
          },
    }
}


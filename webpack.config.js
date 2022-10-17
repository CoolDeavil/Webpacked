
const entries = require('./build/webpack.entries.js');
const output = require('./build/webpack.output.js');
const plugIns = require('./build/webpack.plugins.js');
const rules = require('./build/webpack.rules.js');
const optimize = require('./build/webpack.optimize.js');

const FULL_HASH = false;

let config = {
    entry: entries.baseCode(),
    output: output.webRoot(FULL_HASH),
    resolve: {
        extensions: ['.js','.jsx','.ts','.vue','.scss','.json'],
        modules: ['node_modules'],
    },
    module: {
        rules: rules.filters(),
    },
    plugins: plugIns.buildPlugs(FULL_HASH),
    optimization: {},
    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        allowedHosts: [
            'all',
        ],
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    performance: {
        hints: false
    }
};


module.exports = ( env, argv ) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        console.log("Running on Developer Mode "  );
    }
    if (argv.mode === 'production') {
        config.optimization =  optimize.optimizer();
        console.log("Enabled Production Plugins ");
    }
    return config;
};



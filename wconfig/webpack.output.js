
const path = require("path");

exports.webRoot = () => {

    return {
        path: path.resolve(__dirname, '../public'),
        filename: "./js/[name].min.js",
    }

};


const path = require("path");

exports.webRoot = (mode) => {

    let filename_ = '';
    if(mode){
        filename_ = "./js/[name].[fullhash].min.js";
    }else{
        filename_ = "./js/[name].min.js";
    }
    return {
        path: path.resolve(__dirname, '../public'),
        filename: filename_,
    }

};

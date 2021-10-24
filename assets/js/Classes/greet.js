
let _ = require('lodash');

export default class Greet {
    
    constructor(name = "Jonh Doe"){
        this.name_ = name;
    }
    greet(){
        console.log(_.join(['Hello', this.name_, 'from','JavaScript'] ,' '))
    }
}
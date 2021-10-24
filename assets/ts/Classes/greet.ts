let _ = require('lodash');
export default class Greet {
    private name: string;
    constructor(name: string = 'Jonh Doe'){
        this.name = name;
    }
    greet() : void {
        console.log(_.join(['Hello', this.name, 'from','TypeScript'] ,' '))
    }
}


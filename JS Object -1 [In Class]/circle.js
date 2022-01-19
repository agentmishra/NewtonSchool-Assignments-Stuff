// import using require
var Shape = require('./shape.js');
// declare class
class Circle extends Shape {
     constructor(color) {
          super();
     }
     calculateArea() {

     }
}

// export class using module.exports
module.exports = Circle;

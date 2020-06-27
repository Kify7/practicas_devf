var { Film } = require("./Film");

class Movie extends Film{
    constructor(name, director, time, genre){
        super(name, director, time);
        this.genre = genre;
        this.price = 180;
    }
}

var shapeOfWater = new Movie('The shape of water', 'director', 156, 'drama fiction');
console.log(shapeOfWater);

var gravity = new Movie('Gravity','Alfonso Cuaron', 145, 'sci fi');
console.log(gravity);

module.exports = { shapeOfWater, gravity };


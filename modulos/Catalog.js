var { innerWorlds, elSembrador } = require("./Documentary");
var { shapeOfWater, gravity } = require("./Movie");

class Cinema{
    constructor(brand, salon, location){
        this. brand = brand;
        this.location = location;
        this.salon = salon;
    }
    play(Film){
        if(Film.price >80){
            return `You're watching ${Film.name}, this is a great ${Film.genre} Movie!`
        } else {
            return `You're watching ${Film.name}, this is a great Documentary ${Film.genre} directed by ${Film.director} `
        }
    }
}

var cinepolis = new Cinema('Cinepolis', 14, 'Miramontes');
console.log(cinepolis);

console.log(cinepolis.play(innerWorlds));

// console.log(cinepolis.play(innerWorlds));
// console.log(cinepolis.play(gravity));


var { Film } = require("./Film");

class Documentary extends Film{
    constructor(name, director, time, year, narrator){
        super(name, director, time);
        this.year = year;
        this.narrator = narrator;
        this.price = 78;
    }
}

var innerWorlds = new Documentary('Inner Worlds', 'Daniel Schmidt', 2012, 'Daniel Schmidt');
console.log(innerWorlds);

var elSembrador = new Documentary('El Sembrador', 170, 'Melissa Elizondo', 2018, 'desconocido');
console.log(elSembrador);

module.exports = { innerWorlds, elSembrador };
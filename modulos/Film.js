class Film{
    constructor(name, director, time){
        this.name = name;
        this.director = director;
        this.time = time + 'minutos'
    }
}

var newFilm = new Film('ejemplo', 'desconocido', 0);

module.exports = { Film };
class Pelicula{
    constructor(idPelicula,nombre,duracion){
        this.idPelicula= idPelicula;
        this.nombre= nombre;
        this.duracion= duracion;
    }

    getIdPelicula(){
        return this.idPelicula;
    }
    
    getNombre(){
        return this.nombre;
    }
    
    getDuracion(){
        return this.duracion;
    }
    
    setIdPelicula(idPelicula){
        this.idPelicula= idPelicula;
    }
    
    setNombre(nombre){
        this.nombre= nombre;
    }
    
    setDuracion(duracion){
        this.duracion= duracion;
    }

    toArray(){
        let lista= [this.idPelicula,this.nombre,this.duracion];
        return lista;
   }
    
}

module.exports = Pelicula;
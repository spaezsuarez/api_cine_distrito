class Pelicula{
    constructor(idPelicula,nombre,duracion,rutaImagen){
        this.idPelicula= idPelicula;
        this.nombre= nombre;
        this.duracion= duracion;
        this.rutaImagen = rutaImagen;
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

    getRutaImagen(){
        return this.rutaImagen;
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

    setRutaImagen(rutaImagen){
        this.rutaImagen = rutaImagen;
    }

    toArray(){
        let lista= [this.idPelicula,this.nombre,this.duracion,this.rutaImagen];
        return lista;
   }
    
}

module.exports = Pelicula;
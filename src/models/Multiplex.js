class Multiplex{
    constructor(idMultiplex,nombreMultiplex,ubicacion){
        this.idMultiplex= idMultiplex;
        this.nombreMultiplex= nombreMultiplex;
        this.ubicacion= ubicacion;
    }

    getIdMultiplex(){
        return this.idMultiplex;
    }
    
    getNombreMultiplex(){
        return this.nombreMultiplex;
    }
    
    getUbicacion(){
        return this.ubicacion;
    }
    
    setIdMultiplex(idMultiplex){
        this.idMultiplex= idMultiplex;
    }
    
    setNombreMultiplex(nombreMultiplex){
        this.nombreMultiplex= nombreMultiplex;
    }
    
    setUbicacion(ubicacion){
        this.ubicacion= ubicacion;
    }

    toArray(){
        let lista= [this.idMultiplex,this.nombreMultiplex,this.ubicacion];
        return lista;
   }
    
}

module.exports = Multiplex;
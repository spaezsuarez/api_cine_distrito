class Silla{
    constructor(idSilla,tipo,precio,Sala_idSala,Sala_Multiplex_idMultiplex){
        this.idSilla= idSilla;
        this.tipo= tipo;
        this.precio= precio;
        this.Sala_idSala= Sala_idSala;
        this.Sala_Multiplex_idMultiplex= Sala_Multiplex_idMultiplex;
    }

    getIdSilla(){
        return this.idSilla;
    }
    
    getTipo(){
        return this.tipo;
    }
    
    getPrecio(){
        return this.precio;
    }
    
    getSala_idSala(){
        return this.Sala_idSala;
    }

    getSala_Multiplex_idMultiplex(){
        return this.Sala_Multiplex_idMultiplex;
    }
    
    setIdSilla(idSilla){
        this.idSilla= idSilla;
    }
    
    setTipo(tipo){
        this.tipo= tipo;
    }
    
    setPrecio(precio){
        this.precio= precio;
    }
    
    setSala_idSala(Sala_idSala){
        this.Sala_idSala= Sala_idSala;
    }

    setSala_Multiplex_idMultiplex(Sala_Multiplex_idMultiplex){
        this.Sala_Multiplex_idMultiplex= Sala_Multiplex_idMultiplex;
    }

    toArray(){
        let lista= [this.idSilla,this.tipo,this.precio,this.Sala_idSala];
        return lista;
   }

}

module.exports = Silla;
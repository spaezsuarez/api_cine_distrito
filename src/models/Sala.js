class Sala{
    constructor(idSala,Multiplex_idMultiplex){
        this.idSala= idSala;
        this.Multiplex_idMultiplex= Multiplex_idMultiplex;
    }

    getIdSala(){
        return this.idSala;
    }
    
    getMultiplex_idMultiplex(){
        return this.Multiplex_idMultiplex;
    }
    
    setIdSala(idSala){
        this.idSala= idSala;
    }
    
    setMultiplex_idMultiplex(Multiplex_idMultiplex){
        this.Multiplex_idMultiplex= Multiplex_idMultiplex;
    }

    toArray(){
        let lista= [this.idSala,this.Multiplex_idMultiplex];
        return lista;
   }
    
}

module.exports = Sala;
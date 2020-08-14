class Cliente{
    constructor(cedula,telefono,nombreCliente,puntos){
        this.cedula= cedula;
        this.telefono= telefono;
        this.nombreCliente= nombreCliente;
        this.puntos= puntos;
    }

    getCedula(){
        return this.cedula;
    }
    
    getTelefono(){
        return this.telefono;
    }
    
    getNombreCliente(){
        return this.nombreCliente;
    }
    
    getPuntos(){
        return this.puntos;
    }
    
    setCedula(cedula){
        this.cedula= cedula;
    }
    
    setTelefono(telefono){
        this.telefono= telefono;
    }
    
    setNombreCliente(nombreCliente){
        this.nombreCliente= nombreCliente;
    }
    
    setPuntos(puntos){
        this.puntos= puntos;
    }
    
    toArray(){
        let lista= [this.cedula,this.telefono,this.nombreCliente,this.puntos];
        return lista;
   }
}

module.exports = Cliente;
class Empleado{
    constructor(idEmpleado,cedula,nombre,fechaInicio,salario,idMultiplex){
        this.idEmpleado= idEmpleado;
        this.cedula= cedula;
        this.nombre= nombre;
        this.fechaInicio= fechaInicio;
        this.salario= salario;
        this.idMultiplex= idMultiplex;
    }

    getIdEmpleado(){
        return this.idEmpleado;
    }
    
    getCedula(){
        return this.cedula;
    }
    
    getNombre(){
        return this.nombre;
    }
    
    getFechaInicio(){
        return this.fechaInicio;
    }

    getIdSalario(){
        return this.salario;
    }

    getMultiplex_idMultiplex(){
        return this.Multiplex_idMultiplex;
    }

    getIdMultiplex(){
        return this.idMultiplex;
    }
    
    setIdEmpleado(idEmpleado){
        this.idEmpleado= idEmpleado;
    }
    
    setCedula(cedula){
        this.cedula= cedula;
    }
    
    setNombre(nombre){
        this.nombre= nombre;
    }
    
    setFechaInicio(fechaInicio){
        this.fechaInicio= fechaInicio;
    }

    setIdSalario(salario){
        this.salario= salario;
    }

    setIdMultiplex(idMultiplex){
        this.idMultiplex= idMultiplex;
    }

    setMultiplex_idMultiplexx(Sala_Multiplex_Multiplex_idMultiplexidMultiplex){
        this.Multiplex_idMultiplex= Multiplex_idMultiplex;
    }

    toArray(){
        let lista= [this.idEmpleado,this.cedula,this.nombre,this.fechaInicio,this.salario,this.idMultiplex];
        return lista;
   }

}

module.exports = Empleado;
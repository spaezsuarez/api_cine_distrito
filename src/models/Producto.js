class Producto{
    constructor(idProducto,cantidad,nombreProducto,precio){
        this.idProducto= idProducto;
        this.cantidad= cantidad;
        this.nombreProducto= nombreProducto;
        this.precio= precio;
    }

    getIdProducto(){
        return this.idProducto;
    }
    
    getCantidad(){
        return this.cantidad;
    }
    
    getNombreProducto(){
        return this.nombreProducto;
    }
    
    getPrecio(){
        return this.precio;
    }
    
    setIdProducto(idProducto){
        this.idProducto= idProducto;
    }
    
    setCantidad(cantidad){
        this.cantidad= cantidad;
    }
    
    setNombreProducto(nombreProducto){
        this.nombreProducto= nombreProducto;
    }
    
    setPrecio(precio){
        this.precio= precio;
    }

    toArray(){
        let lista= [this.idProducto,this.nombreProducto,this.cantidad,this.precio];
        return lista;
   }
}

module.exports = Producto;
//Metodos para determinar valores de consultas a la base de datos

function getIdDB(table) {
    switch (table) {
        case 'Empleado':
            return 'idEmpleado';

        case 'Cliente':
            return 'cedula';

        case 'Multiplex':
            return 'idMultiplex';

        case 'Pelicula':
            return 'idPelicula';

        case 'Sala':
            return 'idSala';

        case 'Silla':
            return 'idSilla';

        case 'Producto':
            return 'idProducto';
    }
}

function getValueText(list) {
    let values = 'VALUES(';
    for (let i = 0; i < list.length; i++) {
        if (i === (list.length - 1)) {
            values += `${list[i]});`
        } else {
            values += `${list[i]},`
        }
    }

    return values;
}

function getUpdateText(body) {
    let update = '';
    for (let clave in body) {
        if (body.hasOwnProperty(clave)) {
            update += `${clave} = ${body[clave]},`;
        }
    }
    return update.substring(0, update.length - 1);

}

function getKeys(table) {
    switch (table) {
        case 'Producto_Multiplex':
            return ['idProducto', 'idMultiplex'];

        case 'Multiplex_Cliente':
            return ['cedulaCliente', 'idMultiplex'];

        case 'Pelicula_Sala':
            return ['idPelicula', 'idSala'];

    }
}

module.exports = {
    getIdDB,
    getValueText,
    getUpdateText,
    getKeys
}
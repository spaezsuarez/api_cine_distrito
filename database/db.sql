drop database if exists cinema;

create database cinema;

use cinema;

--Tablas normales

create table Producto(
    idProducto integer not null,
    nombreProducto varchar(45) not null,
    cantidad integer not null,
    precio integer not null
);

alter table Producto add constraint Producto_pk primary key (idProducto);
alter table Producto add constraint ck_idProducto check (idProducto > 0);
alter table Producto add constraint ch_cantidad check (cantidad > 0);
alter table Producto add constraint ch_precio check (precio > 0);

create table Multiplex(
    idMultiplex integer not null,
    nombreMultiplex varchar(30) not null,
    ubicacion varchar(30)
);

alter table Multiplex add constraint pk_Multiplex primary key (idMultiplex);
alter table Multiplex add constraint ck_idMultiplex check (idMultiplex > 0);

create table Empleado(
    idEmpleado integer not null,
    cedula integer not null,
    nombreEmpleado varchar(30) not null,
    fechaInicio date not null,
    salario varchar(45) not null,
    idMultiplex integer not null
);

alter table Empleado add constraint pk_Empleado primary key (idEmpleado);
alter table Empleado add constraint ck_idEmpleado check (idEmpleado > 0);
alter table Empleado add constraint ch_cedula check (cedula > 0);
alter table Empleado add constraint fk_Empleado_Multiplex foreign key (idMultiplex) references Multiplex (idMultiplex);


create table Cliente(
    cedula integer not null,
    telefono varchar(14) not null,
    nombreCliente varchar(30) not null,
    puntos smallint not null

);

alter table Cliente add constraint pk_Cliente primary key (cedula);
alter table Cliente add constraint ck_cedula check (cedula > 0);
alter table Cliente add constraint ch_puntos check (puntos > 0);

create table Sala (
    idSala integer not null,
    idMultiplex integer not null
);

alter table Sala add constraint pk_Sala primary key (idSala);
alter table Sala add constraint ck_idSala check (idSala > 0);
alter table Sala add constraint fk_Sala_Multiplex foreign key (idMultiplex) references Multiplex (idMultiplex);

create table Silla(
    idSila integer not null,
    tipo varchar(20) not null,
    precio smallint not null
);

alter table Silla add constraint pk_Silla primary key (idSilla);
alter table Silla add constraint ck_precio check (precio > 0);

create table Pelicula(
    idPelicula integer not null,
    nombre varchar(45) not null,
    duracion integer not null,
    rutaImagen varchar(255) not null
);

alter table Pelicula add constraint pk_Pelicula primary key (idPelicula);
alter table Pelicula add constraint ck_idPelicula check (idPelicula > 0);
alter table Pelicula add constraint ch_duracion check (duracion > 0);

create table Funcion(
    idFuncion integer not null,
    idSala integer not null,
    idPelicula integer not null,
    fechaInicio date not null,
    fechaFin date not null
);

alter table Funcion add constraint pk_Funcion primary key (idFuncion);
alter table Funcion add constraint fk_Funcion_Pelicula foreign key (idPelicula) references Pelicula (idPelicula);
alter table Funcion add constraint fk_Funcion_Sala foreign key (idSala) references Sala (idSala);


--Tablas de rompimiento
create table Producto_Multiplex(
    idProducto integer not null,
    idMultiplex integer not null
);

alter table Producto_Multiplex add constraint pk_Producto_Multiplex primary key (idProducto, idMultiplex);
alter table Producto_Multiplex add constraint ck_idProducto check (idProducto > 0);
alter table Producto_Multiplex add constraint ck_idMultiplex check (idMultiplex > 0);
alter table Producto_Multiplex add constraint fk_Producto_Multiplex_Mult foreign key (idMultiplex) references Multiplex (idMultiplex);
alter table Producto_Multiplex add constraint fk_Producto_Multiplex_Prod foreign key (idProducto) references Producto (idProducto);

create table Multiplex_Cliente(
    cedulaCliente integer not null,
    idMultiplex integer not null
);

alter table Multiplex_Cliente add constraint pk_Multiplex_Cliente primary key (cedulaCliente, idMultiplex);
alter table Multiplex_Cliente add constraint ck_cedulaCliente check (cedulaCliente > 0);
alter table Multiplex_Cliente add constraint ck_idMultiplex check (idMultiplex > 0);
alter table Multiplex_Cliente add constraint fk_Multiplex_Cliente_Mult foreign key (idMultiplex) references Multiplex (idMultiplex);
alter table Multiplex_Cliente add constraint fk_Multiplex_Cliente_Client foreign key (cedulaCliente) references Cliente (cedula);


create table Funcion_Silla(
    idSilla integer not null,
    idFuncion integer not null,
    estado varchar(20) not null
);

alter table Funcion_Silla add constraint fk_Funcion_Silla_Fila foreign key (idSilla) references Silla (idSilla);
alter table Funcion_Silla add constraint fk_Funcion_Silla_Funcion foreign key (idFuncion) references Funcion (idFuncion);
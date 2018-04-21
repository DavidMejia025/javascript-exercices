// objetos literales
var obj = {
  nombre: "Pedro",
  apellido: "Perez",
  hijos: [
    { nombre: "Pablo" }
  ],
  nombreCompleto: function() {
    return this.nombre + " " + this.apellido;
  },
  "mi-casa": "...."
};

// accerder a propiedades
obj.nombre;
obj.nombreCompleto();
obj["mi-casa"]

// agregarle propiedades
obj.edad = 24;

// modificar propiedades
obj.nombre = "Nuevo nombre";

// eliminar propiedades
delete obj.nombre

for (var k in obj) {
  console.log(k + ": " + obj[k]);
}

// funciones constructoras
var Persona = function(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.nombreCompleto = function() {
    ...
  }
}


var pedro = new Persona("Pedro", "Perez");
var juan = new Persona("Juan", "Gomez");

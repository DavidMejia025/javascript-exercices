var obj = {}; // el prototipo Object.prototype

var pedro = {
  name: "Pedro",
  last: "Gomez",
  completeName: function() {
    return this....
  }
}

function Persona(name, last) {
  this.name = name;
  this.last = last;
}

var juan = new Persona("Juan", "Perez");
var pedro = new Persona("Pedro", "Gomez"); // el prototipo Persona.prototype

Persona.prototype.completeName = function() {
  return this.name + " " + this.last;
}
pedro.completeName = function() { return "Hola" };

console.log(pedro.completeName()); // "Hola"
console.log(juan.completeName()); // "Juan Perez"

// var cars = ["Saab", "Volvo", "BMW"]
// var cars = new Array("Saab", "Volvo", "BMW");
//
//
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.sum = function() {
  var total = 0;
​
  for (var i=0; i < this.length; i++) {
    total += this[i];
  }
​
  return total;
}
console.log(nums.sum());

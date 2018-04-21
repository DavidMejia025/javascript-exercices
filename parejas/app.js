// Crear parejas de forma aleatoria e imprimirlas
// Por ejemplo:
// Pedro - Juan
// David - Pablo
// Daniel

// los nombres no se deberían repetir

// 1. elegir un elemento aleatorio y removerlo del arreglo (si es vacío?)
// 2. elegir otro elemento aleatorio y removerlo del arreglo (si no existe?)
// 3. imprimir la pareja que encontramos


// mientras que la longitud del arreglo no sea 0
//   elegir un elemento aleatorio y removerlo del arreglo
//   elegimos otro y lo removemos (puede que ya lleguemos al final)
//   imprimimos la pareja

var names = [
  "Willan",
  "Leonel",
  "Diego",
  "Jose",
  "Cristian",
  "Ronald"
];

function getAndRemoveElement(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var elem = arr[index];
  arr.splice(index, 1);

  return elem;
}

while (names.length > 0) {
  var pair = getAndRemoveElement(names);
  if (names.length > 0) {
    pair = pair + " - " + getAndRemoveElement(names);
  }

  console.log(pair);
}

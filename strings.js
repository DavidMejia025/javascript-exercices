// longitud
var str = "Hola Mundo";
str.length(); // 10

// obtener caracteres
str[0] // "H"
str[1] // "o"

// recorrer los caracteres
for (var i=0; i < str.length; i++) {
  console.log(str[i]);
}

// partir cadenas
str.split(""); // [ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]
var arr = str.split(" "); // [ "Hola", "Mundo" ]

// unir arreglos en cadenas
 arr.join(); // "HolaMundo"
 arr.join(" "); // "Hola Mundo"

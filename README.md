## Ejericios JavaScript

1. Escribe una función llamada `mayorQueDiez` que reciba un argumento llamado `num` y retorne `true` si `num` es mayor a diez o `false` de lo contrario.

    ```js
    mayorQueDiez(12); // true
    mayorQueDiez(9); // false
    ```

2. Escribe una función llamada `rango` que reciba dos argumentos: `n1` y `n2`. La función debe retornar un arreglo con todos los números de `n1` a `n2`.

    ```js
    rango(1, 10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    rango(8, 9); // [8, 9]
    rango(4, 2); // [4, 3, 2] (opcional)
    ```

3. Escribe una función llamada `pares` que reciba un argumento `arr` (un arreglo) y retorne un nuevo arreglo que incluya sólo las posiciones pares (0, 2, 4, etc.):

    ```js
    pares([0, 1, 2, 3, 4]); // [0, 2, 4]
    pares(["m", "p", "a", "u", "k", "0", "e"]); // ["m", "a", "k", "e"]
    ```

4. Escribir una función llamada `triqui` que reciba un argumento `board` (un arreglo de arreglos) y retorne `true` si hay triqui, `false` de lo contrario.

   ```js
   triqui([
     ["X", "O", "-"],
     ["O", "O", "X"],
     ["-", "O", "X"]
   ]); // true

   triqui([
     ["X", "X", "-"],
     ["O", "O", "X"],
     ["-", "O", "X"]
   ]); // false
   ```

5. Escribir una función `total` que reciba un arreglo de objetos y sume todas las propiedades `price`:

    ```js
    var products = [
      { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
      { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
      { id: 3, name: "Lavadora", price: 100, categories: ["electrodomésticos"] }
    ];
    total(products); // 300

6. Escribe una función `contar` que reciba un argumento llamado `str` y retorna el número de veces que aparece el caracter "a" en `str`:

    ```js
    contar("Hola Make it Real"); // 3
    contar(""); // 0
    ```

7. Modificar la función anterior `contar` para que ahora reciba dos argumentos: `str` y `char`. La función debe retorna el número de veces que aparece el caracter `char` en `str`.

    ```js
    contar("Hola Make it Real", "i"); // 1
    contar("Hello World", "o"); // 3
    ```

8. Agrega una función llamada `esPalindrome` a todos los `String` que reciba un argumento `str` y retorne `true` si la frase es un palíndrome y `false` de lo contrario. Recuerda que un palíndrome es una frase que se lee igual hacia adelante y hacia atrás (excluyendo los espacios).

    ```js
    "anita lava la tina".esPalindrome(); // true
    "a ti no bonita".esPalindrome(); // true
    "hola".esPalindrome(); // false
    ```

9. Crea una función llamada `caracteresEnComun` que recibe dos argumentos: `str1` y `str2`. La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

    ```js
    caracteresEnComun("Hola", "Mundo"); // ["o"]
    caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
    caracteresEnComun("Hola", "Bye"); // []
    ```
10. Crea un función constructora llamada `Auto` que reciba tres argumentos: `marca`, `año`, `precio` e inicialice las siguientes propiedades:

    * `marca` con lo que llega por parámetro
    * `año` con lo que llega con parámetro
    * `precio` con lo que llega con parámetro

  Agrégale tres métodos al prototipo de `Auto`:

    * `velocidad`: retorna la velocidad del auto
    * `acelerar`: recibe un argumento `valor` y aumenta la velocidad de acuerdo a ese argumento.
    * `frenar`: recibe un argumento `valor` y reduce la velocidad de acuerdo a ese argumento. Si la velocidad es cero no debe cambiar.
    ```js
    var auto = new Auto("Renault", 1982, 12000);
    console.log(auto.velocidad()); // 0
    auto.acelerar(1);
    console.log(auto.velocidad()); // 1
    auto.frenar(1);
    console.log(auto.velocidad()); // 0
    ```

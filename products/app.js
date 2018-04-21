function total(products) {
  var totalPrice = 0;
  for (var i=0; i < products.length; i++) {
    var product = products[i]; // { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] }
    totalPrice += product.price;
  }
  return totalPrice;
}

var products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 100, categories: ["electrodomésticos"] },
  { id: 3, name: "Lavadora", price: 50, categories: ["electrodomésticos"] }
];
console.log(total(products));

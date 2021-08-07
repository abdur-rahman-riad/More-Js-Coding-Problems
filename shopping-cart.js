const products = [
    { productName: "Macbook 13", productPrice: 130, quantity: 2 },
    { productName: "Pendrive", productPrice: 50, quantity: 2 },
    { productName: "Mouse-Keyboard", productPrice: 15, quantity: 1 },
    { productName: "Extra Monitor", productPrice: 75, quantity: 2 },
    { productName: "iPhone X", productPrice: 10, quantity: 1 }
];

let sum = 0;
for (const elements of products) {
    const quantityPrice = elements.productPrice * elements.quantity;
    sum = sum + quantityPrice;
}
console.log(sum);
const phones = [
    { model: "htc 728", price: 22000, storage: 4, camera: 8 },
    { model: "iphone 11", price: 120000, storage: 16, camera: 24 },
    { model: "redmi 6", price: 18000, storage: 8, camera: 16 },
    { model: "opp a3", price: 15000, storage: 4, camera: 10 },
    { model: "nokia", price: 7000, storage: 4, camera: 8 },
    { model: "iphone X", price: 999, storage: 16, camera: 16 }
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);
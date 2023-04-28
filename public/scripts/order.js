//calculating the order price and shipping fee-

const orderPrice = document.getElementById("order-price").textContent;
const fullPrice = document.getElementById("full-price");
const orderFullPrice = document.getElementById("order-full-price");
const sum = parseInt(orderPrice) + 100;
fullPrice.textContent = sum;
orderFullPrice.value = sum;

const priceElements = document.querySelectorAll("#price");
const productElements = document.querySelectorAll("#card-element");
//show the totals in ejs file
const totalPricesElements = document.getElementById("total-prices-elements");
const totalProductsElements = document.getElementById(
  "total-products-elements"
);

totalPricesElements.textContent = 0;
totalProductsElements.textContent = 0;

//get each price and push it into an array
let prices = [];
priceElements.forEach((priceElement) => {
  //convert price string into number
  const price = Number(priceElement.textContent);
  prices.push(price);
});
//calculate total of prices
const totalPrice = prices.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
totalPricesElements.textContent = totalPrice;

//total of each product from shopping cart
const totalProducts = productElements.length;
totalProductsElements.textContent = totalProducts;

//send total to node server
const getInput = document.getElementById("input");
getInput.value = totalPrice;

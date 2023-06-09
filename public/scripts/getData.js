const buttons = document.querySelectorAll("#submit-btn");

buttons.forEach((button) => {
  //get dom elements for each button
  const parent = button.parentElement;
  const productDescription = parent.querySelector("#product-description");
  const productPrice = parent.querySelector("#product-price");
  //get the content from each child element
  const description = productDescription.textContent;
  //convert price string into number
  const price = Number(productPrice.textContent);
  //build the data object with "description" and "price" keys
  const data = { description, price };
  //send elements to node server
  button.addEventListener("click", () => {
    //send data to node
    const xml = new XMLHttpRequest();
    xml.open("POST", "/shopping-cart");
    xml.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xml.send(JSON.stringify({ data }));
    const interval = setInterval(removeNotification, 1500);

    const notification = document.querySelector(".notification");
    notification.classList.add("active");

    function removeNotification() {
      notification.classList.remove("active");
      clearInterval(interval);
    }
  });

  //add notification
});

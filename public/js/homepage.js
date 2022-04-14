let cartItemsArray = [];

const cartHandler = (event) => {
    event.preventDefault();
    console.log(event);
    // Collect values from the login form
    cartItemsArray.push(event.target.dataset);
  };

const commitCart = (event) => {
    event.preventDefault();
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArray));
    document.location.replace("/cart");
}

 
  document
  .querySelectorAll('.addToCart').forEach(item => {
    item.addEventListener('click', cartHandler)
  });
  //.addEventListener('click', cartHandler);

  document
  .querySelector('#Cart')
  .addEventListener('click', commitCart);

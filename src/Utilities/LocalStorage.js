const getCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const saveCartToLS = (cart) => {
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifiedCart);
};

const addToCart = (booking) => {
  const cart = getCart();
  cart.push(booking);
  saveCartToLS(cart);
};

export { addToCart, getCart };

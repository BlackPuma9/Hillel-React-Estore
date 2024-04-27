const getProductFromLocalStorageCart = () => {
  const localCart = localStorage.getItem("cart");
  return localCart === null ? [] : JSON.parse(localCart);
};

const getCartIdFromLocalStorage = () => localStorage.getItem("cartId");

const setCartIdFromLocalStorage = (id) => localStorage.setItem("cartId", id);

const setProductsToCart = (cartData) =>
  localStorage.setItem("cart", JSON.stringify(cartData));

const clearCartFromLocalStorage = () => {
  localStorage.removeItem("cart");
  localStorage.removeItem("cartId");
};

export {
  getProductFromLocalStorageCart,
  getCartIdFromLocalStorage,
  setCartIdFromLocalStorage,
  setProductsToCart,
  clearCartFromLocalStorage,
};

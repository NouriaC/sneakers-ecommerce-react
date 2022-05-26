const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.imgURL,
        price: product.price,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  if (action.type === "REMOVE_CART_ITEM") {
    let tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  throw new Error(`"No matching ${action.type}" - action type`);
};

export default cart_reducer;

export const productReducer = (state, action) => {
  //current state, action object -> next state
  switch (action.type) {
    case "addToCart":
      return { ...state, cart: [...state.cart, action.payload] };

    case "addToWishList":
      return { ...state, cart: [...state.cart, action.payload] };
    case "increaseTotalCount":
      return { ...state, totalItems: state.totalItems + 1 };
    default:
      return { ...state };
  }
};

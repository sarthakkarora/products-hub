import { createContext, useReducer } from "react";
import { productReducer } from "./productReducer";

export const ProductContext = createContext();

const ProductState = ({ children }) => {
  let initialState = {
    wishlist: [],
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  };
  const [state, dispatch] = useReducer(productReducer, initialState);
  const addItemToCart = (item) => {
    dispatch({
      type: "addToCart",
      payload: item,
    });
  };
  const increaseTotalCount = (item) => {
    dispatch({
      type: "increaseTotalCount",
      payload: item,
    });
  };
  const removeItemFromCart = () => {};
  const addItemToWishList = (item) => {
    dispatch({
      type: "addToWishList",
      payload: item,
    });
  };
  const removeItemFromWishlist = () => {};
  return (
    <ProductContext.Provider
      value={{
        cart: state.cart,
        wishlist: state.wishlist,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        addItemToCart,
        addItemToWishList,
        increaseTotalCount,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;

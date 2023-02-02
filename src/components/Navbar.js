import "../styles/Navbar.css";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductState";
import Cart from "./Cart";
const Navbar = () => {
  let { totalItems } = useContext(ProductContext);
  const [showCart, setShowCart] = useState(false);
  return (
    <nav className="navbar">
      <h3>
        Pr<i className="fa-solid fa-cube"></i>dHub
      </h3>
      <div className="navbar__selections">
        <div className="navbar_selections-search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="search products" />
        </div>

        <i
          className="fa-solid fa-heart navbar__selections-items"
          title="wishlist"
        ></i>

        <span
          className="navbar__selections-items__cart"
          onClick={() => {
            setShowCart(true);
          }}
        >
          <i
            className="fa-solid fa-cart-shopping navbar__selections-items "
            title="cart"
          ></i>
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </span>
      </div>
      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;

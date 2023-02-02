import "../styles/Navbar.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductState";
const Navbar = () => {
  let { totalItems } = useContext(ProductContext);

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

        <span className="navbar__selections-items__cart">
          <i
            className="fa-solid fa-cart-shopping navbar__selections-items "
            title="cart"
          ></i>
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

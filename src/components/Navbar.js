import "../styles/Navbar.css";

const Navbar = () => {
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
        <i
          className="fa-solid fa-cart-shopping navbar__selections-items"
          title="cart"
        ></i>
      </div>
    </nav>
  );
};

export default Navbar;

import "../styles/Product.css";
const Product = ({ product }) => {
  return (
    <div className="products__item">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
  );
};

export default Product;

import "../styles/Product.css";
const Product = ({ product }) => {
  let rating = Math.floor(product.rating);
  return (
    <div className="products__item">
      <img src={product.thumbnail} alt={product.title} />
      <span className="products__item-like">
        <i className="fa-solid fa-heart"></i>
      </span>
      <div className="products__item-description">
        <div className="products__item-description__header">
          <span>{product.title}</span>
          <span>${product.price}</span>
        </div>
        <div className="products__item-description__footer">
          <span>{product.category}</span>
          <div>
            {new Array(5).fill("star").map((i, index) => (
              <i
                key={index}
                className="fa-solid fa-star"
                style={{
                  color: `${index + 1 <= rating ? "#10b981" : ""}`,
                }}
              ></i>
            ))}
            <span style={{ margin: "0 2px" }}>({product.rating})</span>
          </div>

          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;

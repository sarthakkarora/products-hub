import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setTotalPages(data?.total);
      });
  };
  const fetchPrevious = () => {
    setPage(page - 1);
  };
  const fetchNext = () => {
    setPage(page + 1);
  };
  return (
    <div className="App">
      <nav className="navbar">
        <h1>Products</h1>
      </nav>

      <div className="products">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="products__item">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button onClick={fetchPrevious} disabled={page <= 1}>
          Previous
        </button>
        {totalPages > 0 &&
          Array(totalPages / 10)
            .fill(null)
            .map((_, index) => (
              <button
                className={
                  page == index + 1 ? "pagination__button-selected" : ""
                }
                key={index}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        <button onClick={fetchNext} disabled={page >= products.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

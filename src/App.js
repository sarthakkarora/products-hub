import "./styles.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    fetch(
      `https://dummyjson.com/products?limit=${pageSize}&skip=${
        page * pageSize - pageSize
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
  let paginationProps = {
    page,
    setPage,
    products,
    totalPages,
    fetchPrevious,
    fetchNext,
    pageSize,
    setPageSize,
  };
  return (
    <div className="App">
      <Navbar />
      <div className="products">
        {products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>

      <Pagination {...paginationProps} />
    </div>
  );
}

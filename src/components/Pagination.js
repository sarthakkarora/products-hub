import "../styles/Pagination.css";

const Pagination = (props) => {
  let { products, totalPages, page, setPage, fetchPrevious, fetchNext } = props;
  return (
    <div className="pagination">
      <button onClick={fetchPrevious} disabled={page <= 1}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      {totalPages > 0 &&
        Array.from({ length: totalPages }).map((_, index) => (
          <button
            className={page === index + 1 ? "pagination__button-selected" : ""}
            key={index}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      <button onClick={fetchNext} disabled={page >= totalPages}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;

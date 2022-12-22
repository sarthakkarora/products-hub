const Pagination = (props) => {
  let { products, totalPages, page, setPage, fetchPrevious, fetchNext } = props;
  return (
    <div className="pagination">
      <button onClick={fetchPrevious} disabled={page <= 1}>
        Previous
      </button>
      {totalPages > 0 &&
        Array(props.totalPages / 10)
          .fill(null)
          .map((_, index) => (
            <button
              className={page == index + 1 ? "pagination__button-selected" : ""}
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
  );
};

export default Pagination;

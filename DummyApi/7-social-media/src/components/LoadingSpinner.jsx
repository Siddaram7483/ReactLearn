const LoadingSpinner = () => {
  return (
    <>
      <div
        className="spinner-border spinner"
        style={{ width: "6rem", height: "6rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <div
        className="spinner-grow"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );
};

export default LoadingSpinner;

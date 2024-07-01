function TodoItem1() {
  let TodoName ='Buy Milk';
  let TodoDate='4/10/2024';
  return (
    <div className="container">
      <div className="row sidd-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sidd-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;

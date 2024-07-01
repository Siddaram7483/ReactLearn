import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from "react-icons/ri";
//import { RiDeleteBin5Fill } from "react-icons/ri";


function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row sidd-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sidd-button" onClick={() => onDeleteClick(todoName)}>
          <RiDeleteBin6Line />
          {/* <RiDeleteBin5Fill /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoItem;

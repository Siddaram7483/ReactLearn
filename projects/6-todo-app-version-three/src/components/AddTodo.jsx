// import { useState, useRef } from "react";
import {useRef} from "react";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement =useRef();
  const dueDateElement =useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current +=1;
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are : ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName= todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value;
    dueDateElement.current.value;

    // console.log(`${todoName} due on :${dueDate}`);
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row sidd-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement}
          //value={dueDate} 
          // onChange= {handleDateChange} 
          />
        </div>
        <div className="col-2">
          <button
          // onSubmit={handleAddButtonClicked}
            type="submit"
            className="btn btn-success sidd-button"
            // onClick={handleAddButtonClicked}
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

AddTodo.propTypes = {
  onNewItem: PropTypes.func.isRequired,
};

export default AddTodo;

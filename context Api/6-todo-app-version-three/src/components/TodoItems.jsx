// import PropTypes from "prop-types";
// import TodoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

// const TodoItems = ({ todoItems, onDeleteClick }) => {
//   return (
//     <div className={styles.itemsContainer}>
//       {todoItems.length === 0 ? (
//         <p><b>Enjoy Your Day</b></p>
//       ) : (
//         todoItems.map((item, index) => (
//           <TodoItem
//             key={index}
//             todoName={item.name}
//             todoDate={item.dueDate}
//             onDeleteClick={onDeleteClick}
//           />
//         ))
//       )}
//       <p><b>HEHE...!!! ADD SOME MORE ITEMS DUDE</b></p>
//     </div>
//   );
// };

// TodoItems.propTypes = {
//   todoItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       dueDate: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteClick: PropTypes.func.isRequired,
// };

// export default TodoItems;
// TodoItems.js
  



import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';

const TodoItems = () => {
  //  const contextObj =useContext(TodoItemsContext);
  //  const todoItems =contextObj.todoItems;

  const {todoItems} =useContext(TodoItemsContext);
  return (
    <div className={styles.itemsContainer}>
      {todoItems.length === 0 ? (
        <p>
          <b>Enjoy Your Day But Add Some More Items here Dude !!!</b>
        </p>
      ) : (
        todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))
      )}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoItems;

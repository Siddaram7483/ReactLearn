// import styles from "./WelcomeMessage.module.css";
// const welcomeMessage = ({todoItems}) =>{
//   console.log(todoItems);
//   return  todoItems.length ===0 &&<p className={styles.welcome}>Enjoy your Day!!!!</p>
// }
// export default welcomeMessage;

// WelcomeMessage.js

import PropTypes from "prop-types";
import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  // const contextObj =useContext(TodoItemsContext);
  // const todoItems =contextObj.todoItems;
  const {todoItems} =useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>Enjoy your Day!!!!</p>
    )
  );
};

WelcomeMessage.propTypes = {
  todoItems: PropTypes.array.isRequired,
};

export default WelcomeMessage;

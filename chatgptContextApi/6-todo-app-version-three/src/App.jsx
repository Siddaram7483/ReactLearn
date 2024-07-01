
// import { useState } from 'react';
// import AddTodo from './components/AddTodo';
// import AppName from './components/AppName';
// import TodoItems from './components/TodoItems';
// import './App.css';
// import WelcomeMessage from './components/WelcomeMessage';
// import { TodoItemsContext } from './store/todo-items-store';

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const addNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       { name: itemName, dueDate: itemDueDate },
//     ]);
//   };

//   const deleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter(
//       (item) => item.name !== todoItemName
//     );
//     setTodoItems(newTodoItems);
//   };
//   // const defaultTodoItems =[{name:'but ghee',dueDate:'today'}];

//   return (
//     <TodoItemsContext.Provider value={{
//       todoItems:todoItems,
//       addNewItem:addNewItem,
//       deleteItem:deleteItem,
//     }}>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo addNewItem={addNewItem} />
//         <WelcomeMessage todoItems={todoItems} />
//         <TodoItems todoItems={todoItems} onDeleteClick={deleteItem} />
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;
// src/App.js














//this code is for context api 

// import { useState } from 'react';
// import AddTodo from './components/AddTodo';
// import AppName from './components/AppName';
// import TodoItems from './components/TodoItems';
// import WelcomeMessage from './components/WelcomeMessage';
// import './App.css';
// import { TodoItemsContext } from './store/todo-items-store';

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const addNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       { name: itemName, dueDate: itemDueDate },
//     ]);
//   };

//   const deleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter(
//       (item) => item.name !== todoItemName
//     );
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <TodoItemsContext.Provider value={{
//       todoItems,
//       addNewItem,
//       deleteItem,
//     }}>
//       <center className="todo-container">
//         <AppName />
//         <AddTodo />
//         <WelcomeMessage />
//         <TodoItems />
//       </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;


// src/App.js
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';
import { TodoItemsProvider } from './store/todo-items-store';

function App() {
  return (
    <TodoItemsProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsProvider>
  );
}

export default App;

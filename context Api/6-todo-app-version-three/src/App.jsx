
// import AddTodo from "./components/AddTodo";
// import AppName from "./components/AppName";
// import TodoItems from './components/TodoItems';
// import "./App.css";
// import { useState } from "react";
// import WelcomeMessage from "./components/WelcomeMessage";

// function App() {
  
   
//   const [todoItems,setTodoItems] = useState([]);
//   const handleNewItem =(itemName, itemDueDate)=>{
//     // console.log(`new item added: ${itemName} date:${itemDueDate}`);
    
//     setTodoItems((currValue) =>{
//       const newTodoItems = [...currValue, {name:itemName,
//         dueDate: itemDueDate},
//       ];
//       return newTodoItems;
//     });
//   }
//   const handleDeleteItem =(todoItemName) =>{
//     const newTodoItems = todoItems.filter(item =>item.name !==todoItemName);
//     setTodoItems(newTodoItems);
//     console.log(`item deleted :${todoItemName}`);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem ={handleNewItem}/>
//       {<WelcomeMessage todoItems={todoItems} ></WelcomeMessage>}
//       <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
//     </center>
//   );
// }

// export default App;
// App.js




import { useState } from 'react';
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import { TodoItemsContext } from './store/todo-items-store';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== todoItemName
    );
    setTodoItems(newTodoItems);
  };
  // const defaultTodoItems =[{name:'but ghee',dueDate:'today'}];

  return (
    <TodoItemsContext.Provider value={{
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem,
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo addNewItem={addNewItem} />
        <WelcomeMessage todoItems={todoItems} />
        <TodoItems todoItems={todoItems} onDeleteClick={deleteItem} />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

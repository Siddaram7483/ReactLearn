
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from './components/TodoItems';
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  
   
  const [todoItems,setTodoItems] = useState([]);
  const handleNewItem =(itemName, itemDueDate)=>{
    console.log(`new item added: ${itemName} date:${itemDueDate}`);
    
    setTodoItems((currValue) =>{
      const newTodoItems = [...currValue, {name:itemName,
        dueDate: itemDueDate},
      ];
      return newTodoItems;
    });
  }
  const handleDeleteItem =(todoItemName) =>{
    const newTodoItems = todoItems.filter(item =>item.name !==todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item deleted :${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem ={handleNewItem}/>
      {todoItems.lenghth === 0 && <WelcomeMessage ></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;

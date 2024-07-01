
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from './components/TodoItems';
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2024",
    },
    {
      name: "Sidd born",
      dueDate: "05-04-2001",
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;

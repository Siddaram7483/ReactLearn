// //import React from "react"; --> if u want to import this use fragment called <React.Fragment>n <React.Fragment/>
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import FoodItems from "./components/FoodItems";
// import ErrorMessage from "./components/ErrorMessage";
// import Container from "./components/Container";
// import FoodInput from "./components/FoodInput";
// import { useState } from "react";

// function App() {
//   //let foodItems=[];
//   //let foodItems = ["dal", "rice", "chapati", "rotti", "sajjaka"];
  
//   // let [textToShow, setTextState] = useState();
//   let [foodItems, setFoodItems]=useState([
//     // "rotti",
//     //  "rice", 
//     //  "chapati"
//     ]);
//   // let textToShow = textStateArr[0]; // it is value
//   // let setTextState = textStateArr[1];// it is a method
//   // console.log(`current value of textState: ${textToShow}`);

//   //let textToShow ="Food Item Entered by User";
//   const onKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       let newFoodItem = event.target.value;
//       event.target.value = "";
//       let newItems = [...foodItems, newFoodItem];
//       setFoodItems(newItems);
//     }
//   //  console.log(event);
//   //   setTextState(event.target.value);
//    };
//   // let emptyMessage = foodItems.length===0?<h3>i am still hungry so please feed me something</h3>:null;

//   return (
//     // You can use React.Fragment or <> </>
//     <>
    
//     <Container>
//       <h1 className="food-heading">Healthy Food</h1>
//       <FoodInput handleKeyDown={onKeyDown}></FoodInput>
//       {/* <p>{textToShow}</p> */}
//       <FoodItems items={foodItems}></FoodItems>
      
//       <ErrorMessage items={foodItems}></ErrorMessage>
//     </Container>
//     {/* <Container>
//       <p>Above are the healthy food lists that are good for your
//          health and 
//          well being</p>
//     </Container> */}
//      {/* <Container>
//       all food items were ends here.ThankYou.
//     </Container> */}
  
    
//     </>
//   );
// }

// export default App;
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
      </Container>
    </>
  );
}

export default App;

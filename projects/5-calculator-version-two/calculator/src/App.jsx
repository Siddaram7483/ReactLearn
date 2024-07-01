import styles from "./App.module.css"; // Importing styles from App.module.css
import Display from "./components/Display"; // Importing Display component with correct casing
import ButtonsContainer from "./components/ButtonsContainer"; // Importing ButtonsContainer component with correct casing
import { useState } from "react";

function App() {
  const  [calVal,  setCalVal] = useState("");
const onButtonClick =(buttonText) =>{
   if(buttonText === 'C'){
    setCalVal(""); 
   }
   else if(buttonText === '='){
    setCalVal(eval(calVal)); 
   }
   else{
    const newDisplayValue= calVal + buttonText;
    setCalVal(newDisplayValue);
   }
};
  return (
    <div className={styles.calculator}>
      <Display displayValue ={calVal}></Display> {/* Correctly using Display component with self-closing tag */}
      <ButtonsContainer onButtonClick ={onButtonClick}></ButtonsContainer> {/* Correctly using ButtonsContainer component with self-closing tag */}
    </div>
  );
}

export default App;

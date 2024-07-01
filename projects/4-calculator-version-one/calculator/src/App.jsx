import styles from "./App.module.css"; // Importing styles from App.module.css
import Display from "./components/Display"; // Importing Display component with correct casing
import ButtonsContainer from "./components/ButtonsContainer"; // Importing ButtonsContainer component with correct casing

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display> {/* Correctly using Display component with self-closing tag */}
      <ButtonsContainer></ButtonsContainer> {/* Correctly using ButtonsContainer component with self-closing tag */}
    </div>
  );
}

export default App;

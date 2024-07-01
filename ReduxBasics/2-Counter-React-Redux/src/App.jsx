// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
// import DisplayCounter from "./components/DisplayCounter";
// import Container from "./components/Container";
// import Controls from "./components/Controls";

// function App() {
//   return (
//     <>
//       <center>
//         <div className="px-4 py-5 my-5 text-center">
//           <Container>
//             <Header />
//             <DisplayCounter />
//             <Controls></Controls>
//           </Container>
//         </div>
//       </center>
//     </>
//   );
// }

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { Provider, useSelector } from "react-redux";
import counterStore from "./store";
import PrivacyMssg from "./components/PrivacyMssg";

function App () {
  const privacy = useSelector(store =>store.privacy)
  return (
    <Provider store={counterStore}>
      <div className="container">
        <Header />
        <Container>
         {privacy? <PrivacyMssg></PrivacyMssg> :<DisplayCounter/>}
          <Controls />
        </Container>
      </div>
    </Provider>
  );
}

export default App;

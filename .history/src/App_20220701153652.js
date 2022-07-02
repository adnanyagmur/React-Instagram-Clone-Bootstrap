import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/Hompage";


function App() {
  return (
  <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
  </Routes>
   
  );
}

export default App;

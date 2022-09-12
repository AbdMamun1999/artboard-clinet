import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Singup from "./Pages/Singup/Singup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Singup></Singup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;

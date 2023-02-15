import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "./Global";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import PrivatePage from "../Services/PrivatePage";
function App() {
  return (
    <>
      <Reset />
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<PrivatePage><Home/></PrivatePage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

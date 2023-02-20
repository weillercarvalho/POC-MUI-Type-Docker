import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Global } from "./Global";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PrivatePage from "../Services/PrivatePage";
import { VerificationProvider } from "../Contexts/Verification";
function App() {
  return (
    <>
      <Reset />
      <Global />
      <VerificationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </VerificationProvider>
    </>
  );
}

export default App;

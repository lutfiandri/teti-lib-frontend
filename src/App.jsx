import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { SignIn, SignUp } from "./pages/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

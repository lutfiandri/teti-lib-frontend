import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { SignIn, SignUp } from "@/pages/auth";
import { ErrorPage } from "@/pages/Error";
import { CreateBook, EditBook, SeeBooks } from "@/pages/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/book" element={<SeeBooks />} />
        <Route path="/admin/book/create" element={<CreateBook />} />
        <Route path="/admin/book/edit" element={<EditBook />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

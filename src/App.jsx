import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { SignIn, SignUp } from "@/pages/auth";
import { CreateBook, EditBook, SeeBooks } from "@/pages/admin";
import FilterBook from "./components/elements/Filterbook";

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
        <Route path="/testfilter" element={<FilterBook />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

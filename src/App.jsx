import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";
import { SignIn, SignUp } from "@/pages/auth";
import { ErrorPage } from "@/pages/Error";
import { CreateBook, EditBook, SeeBooks } from "@/pages/admin";
import { MyBooks } from "@/pages/MyBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my/books" element={<MyBooks />} />
        <Route path="/admin/books" element={<SeeBooks />} />
        <Route path="/admin/books/create" element={<CreateBook />} />
        <Route path="/admin/books/edit/:id" element={<EditBook />} />
        <Route
          path="*"
          element={<ErrorPage status="404" statusCode="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

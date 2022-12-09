import { SeeBooks } from "@/pages/admin";
import { SignIn, SignUp } from "@/pages/auth";
import { ErrorPage } from "@/pages/Error";
import { Home } from "@/pages/Home";
import { MyBooks } from "@/pages/MyBooks";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my/books" element={<MyBooks />} />
        <Route path="/admin/books" element={<SeeBooks />} />
        <Route
          path="*"
          element={<ErrorPage status="404" statusCode="Page Not Found" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import NavBar from "./components/NavBar";
import ShippingAndPayments from "./pages/ShippingAndPayments";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Result from "./pages/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ShippingAndPayments />} />
          <Route path="/result" element={<Result />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

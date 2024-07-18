import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import Header from "./Header";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} exact />
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

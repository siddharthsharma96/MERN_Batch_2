import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/AboutUs"}>About Us</Link>
        <Link to={"/Contact/rt"}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Contact/rt" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

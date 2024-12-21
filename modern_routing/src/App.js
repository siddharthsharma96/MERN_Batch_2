import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
}

export default App;

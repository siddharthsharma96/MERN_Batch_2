import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";

function App() {
  return (
    <div>
      <Header />
      <h1>Food Application</h1>
      <Outlet />
    </div>
  );
}

export default App;

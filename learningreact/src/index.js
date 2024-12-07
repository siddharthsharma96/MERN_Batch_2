import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

// React.createElement("TagName",{Attributes},"Content")
// const Image = React.createElement("img", {
//   src: "https://codehubnexus.com/assets/logov2.png",
//   alt: "Image is not there",
//   width: "100px",
//   className: "b",
// });

// const myElement = React.createElement("div", { className: "a" }, [
//   React.createElement("h1", {}, "Hello"),
//   React.createElement("p", {}, "World"),
//   Image,
// ]);
// root.render(myElement
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Demo from "./demo";
// import Counter from "../src/components/counter";
import Ecomerce from "./components/ecomerce-demo/ecomerce";

ReactDOM.render(
  <React.StrictMode>
    <Ecomerce />
  </React.StrictMode>,
  document.getElementById("root") //đổ data vào vùng có id = root ở index.html ở ngoài
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

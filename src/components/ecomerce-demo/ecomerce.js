import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopMenu from "./top-menu";

import product from "./pages/products";
const home = () => <h2>Home</h2>;

function App(props) {
  return (
    <Router>
      <div className="App">
        <TopMenu />

        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li> */}
      </div>

      <Route path="/" exact component={home} />
      <Route path="/products" exact component={product} />
    </Router>
  );
}

export default App;

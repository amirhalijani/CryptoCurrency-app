import React from "react";
import { Navbar, Main } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default App;

import React from "react";
import Fetch from "./components/Fetch";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h3>Happy Beer</h3>
      </div>

      <Fetch />
    </div>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import PointTransaction from "./PointTransaction";

import "./styles.css";
function App() {
  return (
    <PointTransaction/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

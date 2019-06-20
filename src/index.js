import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App({ message }) {
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App message="Hello World." />, rootElement);

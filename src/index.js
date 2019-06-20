import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./components/greeting";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Greeting message="Hello World." />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

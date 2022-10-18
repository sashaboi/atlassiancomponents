import "./App.css";
import Navbar from "./component/Navbar";
import React from "react";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;

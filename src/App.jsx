import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Planet from "./components/Planet";
import People from "./components/People";

function App() {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <div className="content">
        <Navbar setPage={setPage} />
      </div>
      {page === "planets" ? <Planet /> : <People />}
    </div>
  );
}

export default App;

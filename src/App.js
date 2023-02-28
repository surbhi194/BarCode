import React, { useState } from "react";
import User from "./Components/User";
import Welcome from './Components/Welcome';
import Add from './Components/Add';
import Secondary from "./Components/Secondary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [name, setName] = useState("");

  const fun=(value)=> {
    setName(value);
  }

  return (
    <div className="App">

      <Router>

        <Routes>
          <Route exact path="/" element={<User fun={fun} />} />
          <Route exact path="/User" element={<User fun={fun} />} />
          <Route exact path="/Add" element={<Add />} />
          <Route path="/Welcome" element={<Welcome name={name} />} />
          <Route path="/Secondary" element={<Secondary />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;

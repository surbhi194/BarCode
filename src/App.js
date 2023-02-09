import React, { useState } from "react";
import User from "./Components/User";
import Welcome from './Components/Welcome';
import Content from './Components/Content';
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
          <Route exact path="/Content" element={<Content />} />
          <Route path="/Welcome" element={<Welcome name={name} />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;

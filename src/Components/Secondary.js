import "./App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Secondary() {

  const [company, setCompany] = useState("");
  const [no, setNo] = useState("");


  function companyHandler(e) {
    let item = e.target.value;
    setCompany(item);
  }
  function noHandler(e) {
    let item = e.target.value;
    setNo(item);
  }

  return (
    <div className="Add">
      <form>
        <br></br>
        Select Item :-
        <div class="dropdown">
  <button class="dropbtn">Select product</button>
  <div class="dropdown-content">
  <a href="#">Product 1</a>
  <a href="#">Product 2</a>
  </div>
</div>

        <br />
        <br />
        Quantity :-
        <input type="text" placeholder="Number of products" onChange={noHandler} />
        <br />
        <br />
        Company :-
        <input type="text" placeholder="Company Name" onChange={companyHandler} />
        <br />
        <br />

          <button>
            <Link to="/Welcome">Create QR code</Link>
          </button>

        <br />
        <br />

      </form>
    </div>
  );
}
export default Secondary;

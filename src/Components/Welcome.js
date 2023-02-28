import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Add from './Add';
import Secondary from "./Secondary";

function Welcome(props) {

  return (
    <div className="List">

      <h2>Welcome {props.name}</h2>
      <br/>
      <button>
            <Link to="/Add">Add product</Link>
          </button>

      <div className="Save1">
        <button className="Save">
          <Link to="/">log out</Link>
        </button>
      </div>

      <div className="More1">
        <button className="More">
          <b>
            <Link to="/Secondary">My_list</Link>
          </b>
        </button>
      </div>

    </div>
  );
}

export default Welcome;

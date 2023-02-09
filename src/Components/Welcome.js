import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Content from './Content';

function Welcome(props) {

  return (
    <div className="List">

      <h2>Welcome {props.name}</h2>

      <div className="Save1">
        <button className="Save">
          <Link to="/">log out</Link>
        </button>
      </div>

      <div className="More1">
        <button className="More">
          <b>
            <Link to="/Content">My_list</Link>
          </b>
        </button>
      </div>

    </div>
  );
}

export default Welcome;

import "./App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data1 from "./data.json";
import Welcome from './Welcome';

function User(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data1));
  }, []);

  function userHandler(e) {
    let item = e.target.value;

    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }

    setUser(item);
    props.fun(item);
  }

  function sign(e) {
    window.alert("Both fields are required:)");
  }

  function passwordHandler(e) {
    let item = e.target.value;

    if (item.length < 8) {
      setpasswordErr(true);
    } else {
      setpasswordErr(false);
    }

    setPassword(item);
  }
  return (
    <div className="User">
      <h3>
        <i>BAR CODE GENERATOR</i>
      </h3>

      <form>
        <br></br>
        User Name :-
        <input type="text" placeholder="userName" onChange={userHandler} />
        {userErr ? <span>user not valid</span> : <span> </span>}
        <br />
        <br />
        Password :-
        <input type="password" placeholder="password" onChange={passwordHandler} />

        {passwordErr ? (
          <span>
            password not valid(password must contain atleast 8 characters)
          </span>
        ) : (
          <span> </span>
        )}

        <br />
        <br />

        {user.length > 2 && password.length >= 8 ? (
          <button>
            <Link to="/Welcome">signUp</Link>
          </button>
        ) : (
          <div>
            <button onClick={sign}>signUp</button>
          </div>
        )}

        <br />
        <br />

      </form>

    </div>
  );
}

export default User;

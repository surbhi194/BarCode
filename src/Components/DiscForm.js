import "./App.css";
import ReactDOM from "react-dom";
import DiscList from "./DiscList";
import React, { useEffect, useState } from "react";

function DiscForm(props) {

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const addTask = (userInput) => {
    let copy = [...props.discList];

    copy = [...copy,{ id: props.discList.length + 1, task: userInput, complete: false },];
    localStorage.setItem("data", JSON.stringify(copy));
    props.set(copy);
  };

  const handleSubmit = (e) => {
    addTask(userInput);
  };

  return (
    <>
      <div>
        <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>

        {userInput.length > 0 ? (
          <button style={{ margin: "10px" }} onClick={handleSubmit}>Submit </button>) 
          : (<button style={{ margin: "10px" }}>Submit</button>)
        }

      </div>
    </>
  );
}
export default DiscForm;

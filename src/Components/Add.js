import "./App.css";
import DiscForm from "./DiscForm";
import { Link } from "react-router-dom";
import DiscList from "./DiscList";
import React, { useState } from "react";

function Add(props) {

  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  var back = JSON.parse(localStorage.getItem("data"));
  const [discList, setdiscList] = useState(back);

  const handleToggle = (id) => {
    let mapped = discList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });

    localStorage.setItem("data", JSON.stringify(mapped));
    setdiscList(mapped);
  };

  const handleFilter = () => {
    let filtered = discList.filter((tasks) => {
      return !tasks.complete;
    });

    setdiscList(filtered);
    localStorage.setItem("data", JSON.stringify(filtered));
  };

  const Submit = (e) => {
    e.preventDefault();
  };

  const set = (value) => {
    setdiscList(value);
  };

  const strikeIndex = (value) => {
    handleToggle(value + 1);
  };

  return (
    <div className="Add">

      <button id="addbtn" className="Save2" onlick={Submit}>
        <Link to="/Welcome">Save</Link>
      </button>

      <div class="form-control-1">
        <u>
          <h3>DISCRIPTION LIST</h3>
        </u>
      </div>

      <div class="form-floating">

        <div className="line">
          <DiscList strikeIndex={strikeIndex} discList={discList} />
        </div>
        <button style={{ margin: "20px" }} onClick={handleFilter}>Clear Completed </button>
        <DiscForm discList={discList} set={set} />
      </div>

    </div>
  );
}
export default Add;

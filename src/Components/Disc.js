import React, { useState } from "react";
import "./App.css";

const Disc = (props) => {
    
  const demo = () => {
    props.strikeIndex(props.index);
  };

  return (
    <div className={props.disc.complete ? "strike" : ""}>
      <span onClick={demo}>{props.disc.task}</span>
    </div>
  );
};
export default Disc;

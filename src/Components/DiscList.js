import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Disc from "./Disc.js";

const DiscList = (props) => {

  const strikeIndex = (value) => {
    props.strikeIndex(value);
  };

  return (
    <>
      <div id="DiscList">

        {props.discList.length > 0 && props.discList.map((disc, index) => {
            return (
              <>
                <Disc disc={disc} strikeIndex={strikeIndex} index={index} />
              </>
            );
          })}

      </div>
    </>
  );
};

export default DiscList;

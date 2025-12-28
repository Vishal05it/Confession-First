import React from "react";
import "./Styles/MainSect.css";
function SparkleBox({ sparkles, open, sparklesImg, imgDivRef }) {
  return (
    <div>
      <div ref={imgDivRef} id="imgDiv">
        <img
          src={sparkles}
          alt=""
          id="sparkles"
          style={{ display: open }}
          ref={sparklesImg}
        />
      </div>
    </div>
  );
}

export default SparkleBox;

import React from "react";
import "./intro.scss";
import Man from "../../images/man.png"

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Man} alt=""></img>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Intro;

import React, { useEffect, useRef } from "react";
import "./intro.scss";
// import Man from "../../images/man.png"
// import Ben from "../../images/tinywow_remove_bg_4146027.png"
import Ben2 from "../../images/benNoBG.png";
import downArrow from "../../images/down.png";
// import { init } from "ityped";
import Typewriter from "typewriter-effect/dist/core";

const Intro = () => {
  const typedRef = useRef(null);
  const eyeEmoji = "\u{1F440}";

  useEffect(() => {
    const writer = new Typewriter(typedRef.current, {
        strings: ["Software Engineer", "Web Designer", "Your next hire..?" + "  " + eyeEmoji],
        autoStart: true,
        loop: true,
        pauseFor: 1800
    })
    }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Ben2} alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ben</h1>
          <h3 ref={typedRef}>
            
          </h3>
        </div>
        <a href="#portfolio">
          <img src={downArrow} alt=""></img>
        </a>
      </div>
    </div>
  );
};

export default Intro;

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

  useEffect(() => {
    const writer = new Typewriter(typedRef.current, {
        strings: ["Developer", "Dog Dad", "asdfsd"],
        autoStart: true,
        loop: true,
        pauseFor: 1500
    })

    // writer.stop()
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
          <h3>
            Software <span ref={typedRef}></span>
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

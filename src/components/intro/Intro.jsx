import React, { useEffect, useRef } from "react";
import "./intro.scss";
import Ben3 from "../../images/pfp2copy.jpg";
import downArrow from "../../images/down.png";
import Typewriter from "typewriter-effect/dist/core";

const Intro = () => {
  const typedRef = useRef(null);
  const eyeEmoji = "\u{1F440}";

  useEffect(() => {
    const writer = new Typewriter(typedRef.current, {
        strings: ["Software Engineer", "Web Designer", "Your next hire...?" + "  " + eyeEmoji],
        autoStart: true,
        loop: true,
        pauseFor: 1800
    })
    }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Ben3} alt=""></img>
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

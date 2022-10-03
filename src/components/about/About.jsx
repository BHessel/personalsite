import React, { useState } from "react";
import "./about.scss";
import dog from "../../images/dog.jpg";
import sleepyDog from "../../images/sleepyDog.jpeg";
import snowboarding from "../../images/snowboarding.jpeg";
import arrow from "../../images/arrow.png";

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      // icon: "../../images/mobile.png",
      title: "Hi, I'm Ben",
      desc: "I'm making this career change coming from a decade in sales and entrepreneurship...",
      img: dog,
    },
    {
      id: 2,
      // icon: "../../images/globe.png",
      title: "I'm always looking to grow",
      desc: "I chose to switch into software engineering becuase I've always been interested in learning to code, I wanted a career that kept me more mentally engaged, and one where I could constantly learn new things",
      img: snowboarding,
    },
    {
      id: 3,
      // icon: "../../images/writing.png",
      title: "Some hobbies outside of work include...",
      desc: "Working out, traveling, skateboarding, snowboarding, reading, and giving the dog belly rubs.",
      img: sleepyDog,
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? //if direction click is left, set CS undercondition: if CS is at position 1+, subtract 1, else if it's at position 0, loop back to last item
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : slides.length - 1)
      : //if direction click is right, set CS undercondition: if CS is not in the last position, CS+1, else if it's in last position, send it back to position 0
        setCurrentSlide(
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="about">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, i) => (
          <div className="container" key={i}>
            <div className="item">
              <div className="left">
                <div className="left-content">
                  {/* <div className="img-container">
                    <img src={slide.icon} alt="" />
                  </div> */}
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  {/* <span>More => </span> */}
                </div>
              </div>
              <div className="right">
                <div className="right-content">
                  <div className="img-container">
                    <img src={slide.img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arrow}
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src={arrow}
        alt=""
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default About;

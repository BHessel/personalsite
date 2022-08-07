import React, { useState } from "react";
import "./works.scss";
import cell from "../../images/mobile.png";
import dog from "../../images/dog.jpg";
import arrow from "../../images/arrow.png";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "1",
      icon: "../../images/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "../../images/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "../../images/writing.png",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
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
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, i) => (
          <div className="container" key={i}>
            <div className="item">
              <div className="left">
                <div className="left-content">
                  <div className="img-container">
                    <img src={slide.icon} alt="" />
                  </div>
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <div className="right-content">
                  <div className="img-container">
                    <img src={dog} alt="" />
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

export default Works;

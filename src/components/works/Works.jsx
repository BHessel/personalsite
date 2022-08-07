import React from "react";
import "./works.scss";
import cell from "../../images/mobile.png";
import dog from "../../images/dog.jpg";

const Works = () => {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="left-content">
                <div className="img-container">
                  <img src={cell} alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod, nisi vel consectetur iaculis, nisl nisi
                  consectetur nisi, eget consectetur nisi nisi vel consectetur
                  iaculis.
                </p>
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
      </div>
    </div>
  );
};

export default Works;

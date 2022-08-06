import React from "react";
import "./banner.scss";
import { Skateboarding, Email } from "@mui/icons-material";

const Banner = () => {
  return (
    <div className="banner">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            welcome!
          </a>
          <div className="itemContainer">
            <Skateboarding className="icon" />
            <span>301-602-7621</span>
            <div className="itemContainer">
              <Email className="icon" />
              <span>hesselb3@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className='hamburger'>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

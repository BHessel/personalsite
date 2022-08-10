import React, { useState } from "react";
import "./portfolio.scss";
import NetflixMatcher from "../../images/netflixmmlogo.png";
import PortfolioData from './PortfolioData'

const Portfolio = () => {
  const [active, setActive] = useState("Featured");

  const portfolioItems = [
    "Featured",
    "Web App",
    "Blogs",
    "Current Areas of Study"
  ];


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {portfolioItems.map((item, index) => {
          return (
            <li
              key={index}
              className={
                (active.toLowerCase() === item.toLowerCase()) 
                  ? "portfolioList active"
                  : "porfolioList"
              }
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className="container">
        <div className="item">
          <img src={NetflixMatcher} alt="" />
          <h3>Netflix Movie Matcher</h3>
        </div>
        <div className="item">
          <img src={NetflixMatcher} alt="" />
          <h3>Netflix Movie Matcher</h3>
        </div>
        <div className="item">
          <img src={NetflixMatcher} alt="" />
          <h3>Netflix Movie Matcher</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

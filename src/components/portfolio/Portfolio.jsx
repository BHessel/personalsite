import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import {
  featuredPortfolio,
  blogData,
  currentStudy,
  webPortfolio,
} from "../../data";

const Portfolio = () => {
  const [active, setActive] = useState("featured");
  const [view, setView] = useState([]);

  const portfolioItems = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web Apps" },
    { id: "blogs", title: "Blogs" },
    { id: "current", title: "Current Areas of Study" },
  ];

  useEffect(() => {
    switch (active) {
      case "featured":
        setView(featuredPortfolio);
        break;
      case "web":
        setView(webPortfolio);
        break;
      case "blogs":
        setView(blogData);
        break;
      case "current":
        setView(currentStudy);
        break;
      default:
        setView(featuredPortfolio);
    }
  }, [active]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {portfolioItems.map((item, index) => (
          <li
            key={index}
            className={
              active === item.id ? "portfolioList active" : "porfolioList"
            }
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className="container">
        {view.map((viewItem, index) => (
          <div key={index} className="item">
            <img src={viewItem.img} alt="" />
            <h3>{viewItem.title}</h3>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Portfolio;

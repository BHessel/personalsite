import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import { WebAppData, BlogData } from "./PortfolioData";
import {
  featuredPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolo,
  webPortfolio,
} from "../../data";

const Portfolio = () => {
  const [active, setActive] = useState("featured");
  const [view, setView] = useState([]);

  const portfolioItems = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web Apps" },
    { id: "mobile", title: "Blogs" },
    { id: "design", title: "Current Areas of Study" },
    { id: "content", title: "Current Areas of Study" },
  ];

  useEffect(() => {
    switch (active) {
      case "featured":
        setView(featuredPortfolio);
        break;
      case "web":
        setView(webPortfolio);
        break;
      case "mobile":
        setView(mobilePortfolio);
        break;
      case "design":
        setView(designPortfolio);
        break;
      default:
        setView(featuredPortfolio);
    }
  }, [active]);


  console.log(portfolioItems);
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

// import Home from "./components/home";
import React, { useState } from "react";
import Banner from "./components/banner/Banner";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";

function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <div className="App">
      <Banner burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      <Menu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;

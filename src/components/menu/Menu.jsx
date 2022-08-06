import React from 'react';
import './menu.scss';

const Menu = (props) => {
    
    const { burgerOpen, setBurgerOpen } = props

    const menuItems = ["Home", "Portfolio", "Works", "Testimonials", "Contact"];
    
    return (
        <div className={"menu" + `${burgerOpen ? " active" : ""}`}>
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <li 
                            key={index}
                            onClick={() => setBurgerOpen(!burgerOpen)}
                        >
                            <a href={`#${item.toLowerCase()}`}>{item}</a>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    );
}

export default Menu;

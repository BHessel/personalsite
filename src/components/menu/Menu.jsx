import React from 'react';
import './menu.scss';

const Menu = () => {
    const menuItems = ["Home", "Portfolio", "Works", "Testimonials", "Contact"];
    
    return (
        <div className="menu">
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    );
}

export default Menu;

import React from "react";
import "./Header.css";

const Header = ({ onBurgerMenuClick }) => {
    return (
        <section className="header-wrap">
            <div className="header-title">
                <h1>QUIZZIO</h1>
            </div>
            <div className="burger-menu" onClick={onBurgerMenuClick}>
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
        </section>
    );
}

export default Header;

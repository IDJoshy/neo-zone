import "./_navbar.scss";
import "../Socials/_socials.scss";
import CartWidget from "./Cartwidget.jsx";
import dotted from "../../assets/img/ephemeral_dotted.png";
import { NavLink } from "react-router-dom";

import GitHub from "../Socials/GitHub.jsx";
import LinkedIn from "../Socials/LinkedIn.jsx";
import Instagram from "../Socials/Instagram.jsx";
import { useState } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => 
{
    const [showHamburger, setShowHamburger] = useState(false);

    const toggleHamburger = () => 
    {
        setShowHamburger((prev) => !prev);
    };

    return (
        <nav className="navbar">

            <div className="navbar__container navbar__container--logo"> 

                <NavLink to="/" className="navbar__logo-link">
                    <img src={dotted} alt="" className="navbar__icon navbar__icon--logo"/> 
                </NavLink>

                <div className="navbar__container navbar__container--text">
                    <strong className="navbar__text navbar__text--title">Ephemeral</strong>
                    <p className="navbar__text navbar__text--subtitle">3D Assets Store</p>    
                </div>
                
            </div>

            <button onClick={toggleHamburger} className={`navbar__hamburger ${showHamburger ? "navbar__hamburger--active" : ""}`} >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <Hamburger showHamburger={showHamburger} />

            <ul className="navbar__list navbar__list--links">

                <li className="navbar__list-item">
                    <NavLink to="/category/plugins" className={ ({ isActive }) => (isActive ? "navbar__button navbar__button--active" : "navbar__button")}>
                    Plugins
                    </NavLink>
                </li>

                <li className="navbar__list-item">
                    <NavLink to="/category/assets" className={ ({ isActive }) => (isActive ? "navbar__button navbar__button--active" : "navbar__button")}>
                    Asset-Packs
                    </NavLink>
                </li>

                <li className="navbar__list-item">
                    <NavLink to="/category/commissions" className={ ({ isActive }) => (isActive ? "navbar__button navbar__button--active" : "navbar__button")}>
                    Commissions
                    </NavLink>
                </li>

                <li className="navbar__list-item">
                    <NavLink to="/category/courses" className={ ({ isActive }) => (isActive ? "navbar__button navbar__button--active" : "navbar__button")}>
                    Courses
                    </NavLink>
                </li>
            </ul>

            <ul className="navbar__list navbar__list--socials">

                <li className="navbar__list-item">
                    <a className="navbar__link navbar__link--instagram" href="https://www.instagram.com/iosh.aa/" target="_blank">
                        <Instagram className={"socials__icon socials__icon--instagram"}/>
                    </a>
                </li>

                <li className="navbar__list-item">
                    <a className="navbar__link navbar__link--github" href="https://github.com/IDJoshy" target="_blank">
                        <GitHub className={"socials__icon socials__icon--github"}/>
                    </a>
                </li>

                <li className="navbar__list-item">
                    <a className="navbar__link navbar__link--linkedin" href="https://www.linkedin.com/in/joshua-auristondo-gonzales-b7a183304/" target="_blank">
                        <LinkedIn className={"socials__icon socials__icon--linkedin"}/>
                    </a>
                </li>
            </ul>

            <CartWidget />

        </nav>
    );
}
export default Navbar;
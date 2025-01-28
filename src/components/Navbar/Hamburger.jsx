import "./_hamburger.scss";
import { NavLink } from "react-router-dom";

import GitHub from "../Socials/GitHub.jsx";
import LinkedIn from "../Socials/LinkedIn.jsx";
import Instagram from "../Socials/Instagram.jsx";

const Hamburger = ({showHamburger}) => 
{
    return (

        <nav className={`hamburger ${showHamburger ? "hamburger--active" : ""}`}>

            <ul className="hamburger__list hamburger__list--links">
                
                <li className="hamburger__list-item">
                    <NavLink to="/category/plugins" className={ ({ isActive }) => (isActive ? "hamburger__button hamburger__button--active" : "hamburger__button")}>
                    {">"} Plugins
                    </NavLink>
                </li>

                <li className="hamburger__list-item">
                    <NavLink to="/category/assets" className={ ({ isActive }) => (isActive ? "hamburger__button hamburger__button--active" : "hamburger__button")}>
                    {">"} Asset-Packs
                    </NavLink>
                </li>

                <li className="hamburger__list-item">
                    <NavLink to="/category/commissions" className={ ({ isActive }) => (isActive ? "hamburger__button hamburger__button--active" : "hamburger__button")}>
                    {">"} Commissions
                    </NavLink>
                </li>

                <li className="hamburger__list-item">
                    <NavLink to="/category/courses" className={ ({ isActive }) => (isActive ? "hamburger__button hamburger__button--active" : "hamburger__button")}>
                    {">"} Courses
                    </NavLink>
                </li>
            </ul>

            <ul className="hamburger__list hamburger__list--socials">

                <li className="hamburger__list-item">
                    <a className="hamburger__link hamburger__link--instagram" href="https://www.instagram.com/iosh.aa/" target="_blank">
                        <Instagram className={"hamburger__icon hamburger__icon--instagram"}/>
                    </a>
                </li>

                <li className="hamburger__list-item">
                    <a className="hamburger__link hamburger__link--github" href="https://github.com/IDJoshy" target="_blank">
                        <GitHub className={"hamburger__icon hamburger__icon--github"}/>
                    </a>
                </li>

                <li className="hamburger__list-item">
                    <a className="hamburger__link hamburger__link--linkedin" href="https://www.linkedin.com/in/joshua-auristondo-gonzales-b7a183304/" target="_blank">
                        <LinkedIn className={"hamburger__icon hamburger__icon--linkedin"}/>
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Hamburger
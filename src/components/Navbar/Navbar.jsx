import "./_navbar.scss";
import CartWidget from "./Cartwidget.jsx";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";




const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar__container navbar__container--logo"> 

                <NavLink to="/" className="navbar__logo-link">
                    <img src={logo} alt="" className="navbar__icon"/> 
                </NavLink>

                <div className="navbar__container navbar__container--text">
                    <strong className="navbar__text navbar__text--title">Ephemeral</strong>
                    <p className="navbar__text navbar__text--subtitle">3D Assets Store</p>    
                </div>
                
            </div>

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
                </li>

                <li className="navbar__list-item">
                </li>

                <li className="navbar__list-item">
                </li>
            </ul>

            <CartWidget />

        </nav>
    );
}
export default Navbar;
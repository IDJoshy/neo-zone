import "./_navbar.scss";
import logo from "../../assets/img/logo.png";
import CartWidget from "./Cartwidget.jsx";


const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar__container navbar__container--logo"> 
                
                <img src={logo} alt="" className="navbar__icon"/>

                <div className="navbar__container navbar__container--text">
                    <strong className="navbar__text navbar__text--title">NeoZone</strong>
                    <p className="navbar__text navbar__text--subtitle">Tienda de tecnología</p>    
                </div>
                
            </div>

            <ul className="navbar__list navbar__list--links">

                <li className="navbar__list-item">
                    <button className="navbar__button">
                    Hardware
                    </button>
                </li>

                <li className="navbar__list-item">
                    <button className="navbar__button">
                    Tecnología
                    </button>
                </li>

                <li className="navbar__list-item">
                    <button className="navbar__button">
                    Periféricos
                    </button>
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
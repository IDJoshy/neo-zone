import icon from "../../assets/img/shoppingcart.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cartwidget = () => {
    
    const { totalQuantity } = useContext(CartContext);

    let quantity = totalQuantity();

    return (
        <Link to="/cart" className="navbar__container navbar__container--cart"> 
            <img src={icon} alt="" className="navbar__icon navbar__icon--cart"/> 
            <span className="navbar__text navbar__text--cart">{ quantity !== 0 && quantity}</span>
        </Link>
    )
}
export default Cartwidget

//Cartwidget
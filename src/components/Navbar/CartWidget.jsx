import icon from "../../assets/img/shoppingcart.png";

const CartWidget = () => {
    return (
        <div className="navbar__container navbar__container--cart"> 
            <img src={icon} alt="" className="navbar__icon--cart"/> 
            <span className="navbar__text navbar__text--cart">999</span>
        </div>
    )
}
export default CartWidget
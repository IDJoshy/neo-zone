import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./_cart.scss";

const Cart = () => {
    const { cart, cartTotal, deleteById, deleteCart } = useContext(CartContext);

    if( cart.length === 0 ) 
    {
        return (
            <div className="cart cart--empty"> 
                <h2 className="cart__text cart__text--title-empty">Oops... There's nothing here! 😥</h2>
                <Link to="/" className="cart__button cart__button--back">&#60; Go back</Link>
            </div>
        )
    }

    return (
        <div className="cart cart--not-empty">
            <strong className="cart__text cart__text--title-not-empty">
                Product Cart
            </strong>
            {
                cart.map ( (productCart) => (
                    <div className="cart__item" key={productCart.id}> 
                        <img className="cart__img" src={productCart.image} width={100} alt="Product Image" />
                        <p className="cart__text cart__text--product">{productCart.name}</p>
                        <p className="cart__text cart__text--product">price: ${productCart.price}</p>
                        <p className="cart__text cart__text--product">quantity: {productCart.quantity}</p>
                        <p className="cart__text cart__text--product">parcial price: ${productCart.price * productCart.quantity}</p>
                        <button className="cart__button cart__button--delete-product" onClick={() => deleteById(productCart.id)}>Delete</button>
                    </div>
                ))
            }

            <div className="cart__info">
                <p className="cart__text cart__text--total">
                    Total: ${cartTotal}
                </p>
                <link className="cart__button cart__button--checkout" to="/checkout"> Finish purchase </link> 
                <button className="cart__button cart__button--delete-all" onClick={deleteCart}>Empty Cart</button>
            </div>

        </div>
    )
}
export default Cart;
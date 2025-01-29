import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ErrorHandler from "../Error/Error";
import "./_cart.scss";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

    if( cart.length === 0 ) 
    {
        return (
            <ErrorHandler error="There are no products in the cart" className="error--green"/>
        )
    }

    return (
        <div className="cart cart--not-empty">

<Link to="/" className="cart__button cart__button--back">&#60; All Products</Link>

            <strong className="cart__text cart__text--title cart__text--title-not-empty">
             {">"} Product Cart {"<"}
            </strong>

            <span className="cart__line"></span>

            <div className="cart__products cart__products--items">
                {
                    cart.map ( (productCart) => (
                        <div className="cart__item" key={productCart.id}> 

                            <div className="cart__container cart__container--left"> 
                                <img className="cart__img" src={productCart.image} width={100} alt="Product Image" />
                            </div>
                            
                            <div className="cart__container cart__container--right">
                                <p className="cart__text cart__text--product cart__text--product-title">{productCart.title}</p>
                                <p className="cart__text cart__text--product cart__text--product-price">price: ${productCart.price}</p>
                                <p className="cart__text cart__text--product cart__text--product-quantity">quantity: {productCart.quantity}</p>
                                <p className="cart__text cart__text--product cart__text--product-parcial">parcial price: ${productCart.price * productCart.quantity}</p>
                            </div>

                            <div className="cart__container cart__container--down">
                                <button className="cart__button cart__button--delete-product" onClick={() => deleteProductById(productCart.id)}>Delete</button>
                            </div>
                            
                        </div>
                    ))
                }
            </div>

            <div className="cart__products cart__products--total">
                <p className="cart__text cart__text--total">
                    Total: ${totalPrice()}
                </p>
                <Link className="cart__button cart__button--checkout" to="/checkout"> Finish purchase </Link> 
                <button className="cart__button cart__button--delete-all" onClick={deleteCart}>Empty Cart</button>
            </div>

        </div>
    )
}
export default Cart;
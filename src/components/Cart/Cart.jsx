import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./_cart.scss";

const Cart = () => {
    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext);

    if( cart.length === 0 ) 
    {
        return (
            <div className="cart cart--empty"> 
                <Link to="/" className="cart__button cart__button--back">&#60; Go back</Link>
                <h2 className="cart__text cart__text--title cart__text--title-empty">Oops... There's nothing here! 😥</h2>
            </div>
        )
    }

    return (
        <div className="cart cart--not-empty">

            <Link to="/" className="item-detail__button item-detail__button--back"> &lt; All Products </Link>

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
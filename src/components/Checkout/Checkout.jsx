import { useState, useContext } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "../../db/db.js";
import validateForm from "../../utils/validateForm.js";
import { toast } from "react-toastify";
import "./_checkout.scss"

const Checkout = () => 
{
    const [dataForm, setDataForm] = useState({ fullname: "", phone: "", email: "" });
    const [orderId, setOrderId] = useState(null);
    const { cart, totalPrice } = useContext(CartContext);

    const handleChangeInput = (e) => 
    {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    }

    const handleSubmitForm = async (e) =>
    {
        e.preventDefault();

        const order = 
        {
            buyer: { ...dataForm },
            products: { ...cart },
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        };

        const response = await validateForm(dataForm);
        if(response.status === "success")
        {
            await uploadOrder(order);
        }
        else
        {
            toast.warn(response.message)
        }
    }


    const uploadOrder = async (newOrder) =>
    {
        try
        {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, newOrder);
            setOrderId(response.id);
        }
        catch(error)
        {
            console.log(error);
        }
    }


    return (
        <div className="container checkout"> 
            {   
                orderId ? 
                (
                    <div className="checkout__container checkout__container--success"> 
                        <Link to="/" className="checkout__button checkout__button--back">{"<"} Go back</Link>
                        <h2 className="checkout__text checkout__text--title">Thank you for your purchase!</h2>
                        <p className="checkout__text checkout__text--order">Your order number is: {orderId}</p>

                    </div>
                )
                : 
                (
                    <div className="container checkout__container"> 
                        <Link to="/" className="checkout__button checkout__button--back">{"<"} Go back</Link>

                        <h2 className="checkout__text checkout__text--title">Review your order</h2>
                            
                        <div className="checkout__products">
                            {cart.map((product) => (
                                <div className="checkout__item" key={product.id}>
                                    <img className="checkout__img" src={product.image} alt={product.title} width={100} />
                                    <div className="checkout__info">
                                        <p className="checkout__text checkout__text--product-title">{product.title}</p>
                                        <p className="checkout__text checkout__text--product-price">Price: ${product.price}</p>
                                        <p className="checkout__text checkout__text--product-quantity">Quantity: {product.quantity}</p>
                                        <p className="checkout__text checkout__text--product-total">Total: ${product.price * product.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                    </div>

                )
            }
        </div>
    );

}
export default Checkout;
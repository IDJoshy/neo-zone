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
        <div className="checkout"> 
            {   
                orderId ? 
                (
                    <div className="checkout__container"> 
                        <Link to="/" className="checkout__button checkout__button--back">{"<"} Go back</Link>
                        <h2 className="checkout__text checkout__text--title">Thank you for your purchase!</h2>
                        <p className="checkout__text checkout__text--order">Your order number is: {orderId}</p>

                    </div>
                )
                : 
                (
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                )
            }
        </div>
    );

}
export default Checkout;
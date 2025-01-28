const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) =>
{
    return(
        <div className="checkout__container checkout__container--form">
            <form onSubmit={handleSubmitForm} className="checkout__form" autoComplete="on">

                <h2 className="checkout__text checkout__text--title"> Checkout </h2>

                <div className="checkout__container checkout__container--input">
                    <label className="checkout__text checkout__text--label" htmlFor="fullname">Fullname: </label>
                    <input type="text" name="fullname" id="fullname" className="checkout__input checkout__input--fullname" value={dataForm.fullname} onChange={handleChangeInput} />
                </div>

                
                <div className="checkout__container checkout__container--input">
                    <label className="checkout__text checkout__text--label" htmlFor="phone">Cellphone: </label>
                    <input type="text" name="phone" id="phone" className="checkout__input checkout__input--phone" value={dataForm.phone} onChange={handleChangeInput} />
                </div>
                
                <div className="checkout__container checkout__container--input">
                    <label className="checkout__text checkout__text--label" htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" className="checkout__input checkout__input--email" value={dataForm.email} onChange={handleChangeInput} />
                </div>

                <button type="submit" className="checkout__button checkout__button--submit">Send Order</button>

            </form>
        </div>
    )    
}
export default FormCheckout;
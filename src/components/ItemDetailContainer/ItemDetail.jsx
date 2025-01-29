import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount  from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./_itemdetail.scss";


const ItemDetail = ({ product }) => 
{
    const [showItemCount, setShowItemCount] = useState(true);
    const { addProduct } = useContext(CartContext);

    const addProductInCart = (quantity) => 
    {
        const productToAdd = {...product, quantity};

        addProduct(productToAdd);

        setShowItemCount(false);
    }

    return(
        <div className="container item-detail">

            <div className="item-detail__container item-detail__container--details">
                <Link to="/" className="item-detail__button item-detail__button--back"> &lt; All Products </Link>
                <Link to={ "/category/" + product.category } className="item-detail__button item-detail__button--category">{product.category}</Link>
                <h1 className="item-detail__text item-detail__text--title">{product.title}</h1>
                <p className="item-detail__text item-detail__text--subtitle">{product.subtitle}</p>
                <p className="item-detail__text item-detail__text--price">${product.price}</p>
            </div>

            <span className="item-detail__line"></span>

            <div className="item-detail__container item-detail__container--image">
                <img src={product.image} className="item-detail__image item-detail__image--main"/>
            </div>

            <span className="item-detail__line"></span>

            <div className="item-detail__container item-detail__container--images">
                {/* {
                    product.image.map((image, index) => 
                    (
                        <img key={index} src={image} className="item-detail__image item-detail__image--secondary"/>
                    ))
                } */}
            </div>

            <span className="item-detail__line"></span>

            <div className="item-detail__container item-detail__container--information">
                <p className="item-detail__text item-detail__text--description">{product.description}</p>
                {
                    showItemCount === true ? 
                    (
                        <ItemCount stock={product.stock} addProductInCart={addProductInCart} />
                    )
                    :
                    (
                        <Link to="/cart" className="item-detail__button item-detail__button--finish"> {">"}  Finish your purchase  {"<"} </Link>
                    )
                }
            </div>
        </div>
    );
}
export default ItemDetail;
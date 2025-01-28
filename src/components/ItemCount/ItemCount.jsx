import { useState } from "react";
import "./_itemCount.scss";

const ItemCount = ({ stock, addProductInCart }) => 
{
    const [count , setCount] = useState(1)

    const handleClickDecrement = () => 
    {
        if(count > 1)
        {
            setCount(count - 1);
        }
    }

    const handleClickIncrement = () => 
    {
        if(count < stock)
        {   
            setCount(count + 1);
        }
    }

    return (
        <div className="item-count">

            <div className="item-count__container">

                <button className="item-count__button item-count__button--decrement" onClick={handleClickDecrement}>
                    -
                </button>
                <p className="item-count__text">{count}</p>
                <button className="item-count__button item-count__button--increment" onClick={handleClickIncrement}>
                    +
                </button>

                <button className="item-count__button item-count__button--add" onClick={() => addProductInCart(count)}>Add to cart</button>
            </div>

        </div>
    )
}
export default ItemCount;
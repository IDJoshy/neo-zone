import "./_itemDetail.scss";

const ItemDetail = ({ product }) => {
    console.log(product);
    return(
        <div className="item-detail">
            <div className="item-detail__container item-detail__container--images">

                <div className="item-detail__container--side-images">

                </div>

                <div className="item-detail__container--main-image">
                    <img src={product.image} className="item-detail__image"/>
                </div>
            </div>

            <div className="item-detail__container item-detail__container--information">
                <h1 className="item-detail__text item-detail__text--title">{product.title}</h1>
                <p className="item-detail__text item-detail__text--description">{product.description}</p>
                <p className="item-detail__text item-detail__text--price">${product.price}</p>
            </div>
        </div>
    );
}
export default ItemDetail;
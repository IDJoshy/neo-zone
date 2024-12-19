import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="item-list-container__item">
      <img src={product.image} className="item-list-container__img" alt="" width={100} />
      <p className="item-list-container__text item-list-container__text--title">{product.title}</p>
      <p className="item-list-container__text item-list-container__text--price">${product.price}</p>
      <div className="item-list-container__container">
        <p className="item-list-container__text item-list-container__text--preview">Stock: {product.preview}</p>
        <Link to={ "/detail/" + product.id } className="item-list-container__button" > Ver detalle </Link>
      </div>
    </div>
  )
}
export default Item
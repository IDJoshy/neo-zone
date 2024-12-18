import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} className="item__img" alt="" width={100} />
      <p className="item__text item__text--title">{product.title}</p>
      <p className="item__text item__text--price">${product.price}</p>
      <div className="item__container">
        <p className="item__text item__text--preview">Stock: {product.preview}</p>
        <Link to={ "/detail/" + product.id } className="item__button" > Ver detalle </Link>
      </div>
    </div>
  )
}
export default Item
import React from "react"
import { Link } from "react-router-dom"

const Item = ({ product }) => 
{
  return (
    <div className="item-list-container__item">

      <Link to={ "/detail/" + product.id } className="item-list-container__button" >

        <div className="item-list-container__image-container">
          <img src={product.image[0]} className="item-list-container__image" alt="" width={100} />
        </div>

        <div className="item-list-container__info">
          <p className="item-list-container__text item-list-container__text--title">{product.title}</p>
          <p className="item-list-container__text item-list-container__text--preview">{product.preview}</p>
          <p className="item-list-container__text item-list-container__text--price">${product.price}</p>
        </div>

      </Link>

      <Link to={ "/category/" + product.category } className="item-list-container__button item-list-container__button--category">{product.category}</Link>
    </div>
  )
}
export default Item
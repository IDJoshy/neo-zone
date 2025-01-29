import React from "react";

const ItemSkeleton = () => {
  return (
    <div className="item-list-container__item skeleton">
      <div className="item-list-container__image-container">
        <div className="skeleton__image"></div>
      </div>
      <div className="item-list-container__info">
        <div className="skeleton__text skeleton__text--title"></div>
        <div className="skeleton__text skeleton__text--preview"></div>
        <div className="skeleton__text skeleton__text--price"></div>
      </div>
      <div className="skeleton__button"></div>
    </div>
  );
};

export default ItemSkeleton;
import React from "react";

const ItemSkeleton = () => {
  return (
    <div className="item-list-container__item item-list-container__item--skeleton">
      <div className="item-list-container__image-container item-list-container__image-container--skeleton">
        <svg className="item-list-container__image item-list-container__image--skeleton" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="item-list-container__info item-list-container__info--skeleton">
        <p className="item-list-container__text item-list-container__text--skeleton"></p>
      </div>
      <div className="item-list-container__button item-list-container__button--category">Loading...</div>
    </div>
  );
};

export default ItemSkeleton;
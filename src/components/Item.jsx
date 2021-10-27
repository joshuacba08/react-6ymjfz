import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';

import './styles/Item.css';

const Item = (item) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} cervezas 🍺`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={item.thumbnail} alt="" />
      <Link to={`/detail/${item.id}`}>
          <h3 className="product-card__name">{item.name}</h3>
      </Link>
      
      <span className="product-card__name">${item.price}</span>

      <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;

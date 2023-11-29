// ProductItem.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, actionButtonLabel, onActionClick }) => {
  return (
    <li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
      <img src={product.image} className="w-20" alt={product.title} />
      <span className="text-center font-bold">{product.title}</span>
      <span className="text-center font-bold text-sm">${product.price}</span>
      <Link to={`/product/${product.id}`}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Detalles
        </button>
      </Link>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onActionClick}>
        {actionButtonLabel}
      </button>
    </li>
  );
};

export default ProductItem;

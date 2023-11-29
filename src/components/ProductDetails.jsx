// ProductDetails.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, loading, error, fetchData } = useFakestoreApi();

  useEffect(() => {
    console.log("ProductDetails se montó o actualizó");
    const fetchProductDetails = async () => {
      console.log("Iniciando la carga de detalles...");
      const url = `https://fakestoreapi.com/products/${id}`;
      await fetchData(url);
      console.log("Carga de detalles completa.");
    };
  
    fetchProductDetails();
  }, [id, fetchData]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert("Producto añadido al carrito");
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
      {loading && <span>Cargando...</span>}
      {error && <span>Error al cargar los detalles del producto</span>}
      {product && (
        <>
          <img src={product.image} className="w-20" alt={product.title} />
          <span className="text-center font-bold text-black">{product.title}</span>
          <span className="text-center font-bold text-sm text-black">${product.price}</span>
          <span className="text-center text-black">{product.category}</span>
          <p className="text-center text-black">{product.description}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
        </>
      )}
    </div>
  );
};

export default ProductDetails;


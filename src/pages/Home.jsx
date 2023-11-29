// Home.jsx
import React, { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useFakestoreApi } from "../hooks/useFakestoreApi";

const Home = () => {
  const { data: products, loading, error, fetchData } = useFakestoreApi();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, [fetchData]);

  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const handleActionClick = (product) => {
    if (isProductInCart(product.id)) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
      alert("Producto añadido al carrito");
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products
    ? products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <div className="text-black">
      <h1>Home</h1>
      <div className="mb-4">
        <label htmlFor="search" className="mr-2">
          Buscar:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Ingrese el nombre del producto"
        />
      </div>
      {loading ? <span>Cargando...</span> : null}
      {error ? <span>Hubo un error</span> : null}
      {filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-5 gap-4">
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              actionButtonLabel={isProductInCart(product.id) ? "Eliminar del carrito" : "Agregar al carrito"}
              onActionClick={() => handleActionClick(product)}
            />
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos que coincidan con la búsqueda.</p>
      )}
    </div>
  );
};

export default Home;




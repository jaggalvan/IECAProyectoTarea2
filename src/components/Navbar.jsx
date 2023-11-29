// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">FakeStore</h1>
        <div className="flex items-center">
          <Link to="/cart" className="mr-4">
            Carrito
          </Link>
          <span className="text-sm font-bold">{cart.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

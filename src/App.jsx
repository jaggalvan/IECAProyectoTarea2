// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
          <Navbar />
          <div className="w-full flex justify-center">
            <div className="container flex text-white p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


// useFakestoreApi.js
import { useState, useEffect } from "react";
import axios from "axios";

export const useFakestoreApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);  // Inicia con true

  const fetchData = async (url) => {
    try {
      console.log("Iniciando la solicitud...");
      const result = await axios.get(url);
      console.log("Solicitud exitosa:", result);
      setData(result.data);
      setError(null);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
      console.log("Fin de la solicitud.");
    }
  };

  // UseEffect para cargar datos inicialmente
  useEffect(() => {
    fetchData("https://fakestoreapi.com/products");
  }, []);

  return { data, error, loading, fetchData };
};

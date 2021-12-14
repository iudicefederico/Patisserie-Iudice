import React, { useState, useEffect } from "react";
import { getData } from "../firebase/Firebase";
import { collection, getDocs } from "@firebase/firestore";

const ProdContext = React.createContext({});

export const useProd = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const productosStock = collection(getData(), "productos");
      const productosSnapshot = await getDocs(productosStock);
      const productosList = productosSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosList);
    };
    getProductos(productos);
  }, []);

  return {
    productos,
  };
};

export default ProdContext;

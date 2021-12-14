import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./firebase/Firebase";
import { collection, getDocs } from "@firebase/firestore";
import CartContext from "./context/CartContext";
import ItemDetail from "./ItemDetail";
import PageNotFound from "./PageNotFound";

export default function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const filtrado = productos.filter((itemFilter) => itemFilter.id === id);
  const handleAddToCart = (prod) => {
    addToCart(prod);
  };

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

  const find = productos.find((find) => find.id === id);

  if (find) {
    return (
      <div>
        <ItemDetail item={filtrado} handleAddToCart={handleAddToCart} />
      </div>
    );
  } else {
    return (
      <div>
        <PageNotFound />
      </div>
    );
  }
}

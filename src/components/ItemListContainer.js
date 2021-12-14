import React, { useState, useEffect, useContext } from "react";
import { getData } from "./firebase/Firebase";
import { collection, getDocs } from "@firebase/firestore";
import ItemList from "./ItemList";

export default function ItemListContainer(props) {
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

  return (
    <>
      <div>
        <h3>{props.greeting}</h3>
      </div>
      <div>
        <ItemList products={productos} />
      </div>
    </>
  );
}

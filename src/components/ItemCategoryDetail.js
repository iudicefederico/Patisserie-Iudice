import React, { useState, useEffect } from "react";
import { getData } from "./firebase/Firebase";
import { collection, getDocs } from "@firebase/firestore";
import { useParams } from "react-router-dom";
import ItemCategory from "./ItemCategory";
import PageNotFound from "./PageNotFound";

export default function ItemCategoryDetail() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();
  const filtradoDetalle = productos.filter(
    (itemFilter) => itemFilter.category === category
  );

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

  const find = productos.find((find) => find.category === category);

  if (find) {
    return (
      <div>
        <ItemCategory item={filtradoDetalle} setCart />
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

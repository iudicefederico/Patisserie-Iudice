import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContext, { useProductos } from "./components/context/CartContext";
import { getData } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemCategoryDetail from "./components/ItemCategoryDetail";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  const initialCart = useProductos();

  return (
    <CartContext.Provider value={initialCart}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="BIENVENIDOS/AS" />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer greeting="BIENVENIDOS/AS" />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/item-category-detail/:category">
            <ItemCategoryDetail />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

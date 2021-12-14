import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "./firebase/Firebase";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from "@firebase/firestore";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContext from "./context/CartContext";

const Cart = () => {
  const { cartFinal, removeFromCart } = useContext(CartContext);
  const { cart } = cartFinal;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      parseInt(accumulator) +
      parseInt(currentValue.price) * parseInt(currentValue.cantidad);
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mailV, setMailV] = useState();

  const userInfo = {
    name: name,
    phone: phone,
    mail: mail,
  };
  //ACA ESTA EL CONST
  const isDisable =
    name === "" || phone === "" || mail === "" || mail !== mailV;

  console.log(isDisable);

  const handleBuy = async () => {
    const ordersStock = collection(getData(), "orders");
    await setDoc(doc(ordersStock), {
      buyer: userInfo,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: getTotal(cart),
    });
    const newOrder = await getDoc(doc(ordersStock));
    alert("Su código de orden es: " + newOrder.id);
  };

  const getTotal = (cart) => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.cantidad;
    });
    return total;
  };

  return (
    <div className="cartItem">
      <div>
        {cart.length > 0 ? (
          <>
            <h3>Carrito de Compras:</h3>
            <ul>
              {cart.map((props) => (
                <li className="list" key={props.id}>
                  <h4 className="title">{props.title}</h4>
                  <h4 className="description">
                    Monto: ${props.price * props.cantidad}
                  </h4>
                  <h4 className="description">Cantidad: {props.cantidad}</h4>
                  <button onClick={handleRemove(props)}>Quitar Producto</button>
                </li>
              ))}
            </ul>
            {cart.length > 0 && (
              <div>
                <h3>{`Precio Final: $ ${handleSumTotal()}`}</h3>
              </div>
            )}
            <div className="navbar__link__form">
              <ReactBootStrap.InputGroup.Text id="inputGroup-sizing-default">
                Apellido y Nombre:
              </ReactBootStrap.InputGroup.Text>
              <ReactBootStrap.FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Inserte su nombre completo aquí"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="navbar__link__form">
              <ReactBootStrap.InputGroup.Text id="inputGroup-sizing-default">
                Teléfono de Contacto:
              </ReactBootStrap.InputGroup.Text>
              <ReactBootStrap.FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Inserte su teléfono de contacto aquí"
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="navbar__link__form">
              <ReactBootStrap.InputGroup.Text id="inputGroup-sizing-default">
                Correo Electrónico:
              </ReactBootStrap.InputGroup.Text>
              <ReactBootStrap.FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Ingrese su correo electrónico aquí"
                onChange={(event) => setMail(event.target.value)}
              />
            </div>
            <div className="navbar__link__form">
              <ReactBootStrap.InputGroup.Text id="inputGroup-sizing-default">
                Confirme su Correo Electrónico:
              </ReactBootStrap.InputGroup.Text>
              <ReactBootStrap.FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Reingrese su correo electrónico aquí"
                onChange={(event) => setMailV(event.target.value)}
              />
            </div>
            <button disabled={isDisable} onClick={handleBuy}>
              Realizar Compra
            </button>
          </>
        ) : (
          <>
            <h3>El carrito se encuentra vacío</h3>
            <Link className="descriptionimg" to={`/`}>
              Volver a Comprar
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

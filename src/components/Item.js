import "./css/NavBar.css";

import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <>
      <h4 className="title">{props.title}</h4>
      <h3 className="description">${props.price}</h3>
      <h3 className="description">
        <Link className="descriptionimg" to={`/item/${props.id}`}>
          Comprar
        </Link>
      </h3>
      <img className="img" alt={props.title} src={props.img} />
    </>
  );
}

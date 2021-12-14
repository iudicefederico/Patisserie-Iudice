import ItemCount from "./ItemCount";

export default function ItemDetail({ item, handleAddToCart }) {
  return (
    <ul>
      {item.map((props) => (
        <li key={props.id}>
          <h4 className="title">{props.title}</h4>
          <img className="img" alt={props.title} src={props.img} />
          <ItemCount
            stock={props.stock}
            cantidad={0}
            onAdd={(carrito) => {
              props.cantidad = String(carrito.cantidad);
              handleAddToCart(props);
            }}
            text="Agregar al carrito"
          />
        </li>
      ))}
    </ul>
  );
}

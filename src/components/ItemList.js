import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <ul>
      {products.map((prod) => (
        <li className="list" key={prod.id}>
          <Item {...prod} />
        </li>
      ))}
    </ul>
  );
}

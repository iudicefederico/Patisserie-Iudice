export default function ItemCategory({ item }) {
  return (
    <ul>
      {item.map((props) => (
        <li className="list" key={props.id}>
          <h4 className="title">{props.title}</h4>
          <h3 className="description">{props.description}</h3>
          <img className="img" alt={props.title} src={props.img} />
        </li>
      ))}
    </ul>
  );
}

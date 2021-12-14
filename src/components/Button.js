export default function Button(props) {
  return <button onClick={props.onAdd}>{props.text}</button>;
}

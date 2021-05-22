import "./Header.css";

export default function Header(props) {
  console.log(props);
  return (
    <div className="Header">
      <h2 className="Header__title">{props.children}</h2>
      <h2>Этот текст будет на всех страницах :Р</h2>
    </div>
  );
}

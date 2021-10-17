import "./Text.css";

export default function Text(props) {
  return (
    <span className={`Text Text_${props.size || "m"} ${props.className}`}>
      {props.children}
    </span>
  );
}

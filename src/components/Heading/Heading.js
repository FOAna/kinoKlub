import "./Heading.css";

export default function Heading(props) {
  if (props.level === 5) {
    return (
      <h5
        className={`Heading Heading_h5 Heading_${props.color} ${props.className}`}
      >
        {props.children}
      </h5>
    );
  }
  if (props.level === 2) {
    return (
      <h2
        className={`Heading Heading_h2 Heading_${props.color} ${props.className}`}
      >
        {props.children}
      </h2>
    );
  }
  return null;
}

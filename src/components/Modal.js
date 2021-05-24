import "./Modal.css";

export default function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <button className="chicken" onClick={props.onClose()}>
        &#128020;
      </button>
    </div>
  );
}

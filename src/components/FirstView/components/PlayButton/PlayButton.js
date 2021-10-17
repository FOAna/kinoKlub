import "./PlayButton.css";
import play from "../../../../images/play.svg";

export default function PlayButton(props) {
  return (
    <button className={`PlayButton ${props.className}`}>
      {props.children}
      <img className="PlayButton__play" src={play} alt="Погнали смотреть!" />
    </button>
  );
}

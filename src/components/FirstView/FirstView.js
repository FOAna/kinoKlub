import "./FirstView.css";
import Header from "../Header/Header";
import wave from "../../images/vector.svg";
import joker from "../../images/joker&batman.png";

export default function FirstView() {
  return (
    <section className="FirstView">
      <img className="FirstView__wave" src={wave} alt="Волнушка" />
      <img className="FirstView__foreground" src={joker} alt="Джокер" />
      <div className="FirstView__content">
        {/*атрибутами указываются элементы объекта, передаваемого в функцию Header*/}
        <Header className="FirstView__header" />
      </div>
    </section>
  );
}

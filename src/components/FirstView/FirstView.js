import "./FirstView.css";
import Header from "../Header/Header";
import wave from "../../images/vector.svg";
import joker from "../../images/joker&batman.png";
import Heading from "../Heading/Heading";

export default function FirstView() {
  return (
    <section className="FirstView">
      <img className="FirstView__wave" src={wave} alt="Волнушка" />
      <img className="FirstView__foreground" src={joker} alt="Джокер" />
      <div className="FirstView__allContent">
        {/*атрибутами указываются элементы объекта, передаваемого в функцию Header*/}
        <Header className="FirstView__header" />
        <div className="FirstView__content">
          <div className="FirstView__left">
            <div className="FirstView__graphics">
              <div className="FirstView__point"></div>
              <div className="FirstView__line"></div>
            </div>
            <div className="FirstView__text">
              <Heading
                level={5}
                color="secondary"
                className="FirstView__sectionHeading"
              >
                POPULAR
              </Heading>
              <Heading level={2} color="primary">
                Joker:
              </Heading>
              <Heading
                level={2}
                color="primary"
                className="FirstView__thinnerText"
              >
                The Dark Knight
              </Heading>
              <div className="FirstView__rating">
                <span className="FirstView__ratingText">Rating</span>
              </div>
              <p className="FirstView__filmDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="FirstView__right">
            <Heading level={5} color="primary">
              NEW ITEMS
            </Heading>
          </div>
        </div>
      </div>
    </section>
  );
}

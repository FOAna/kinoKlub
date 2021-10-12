import "./FirstView.css";
import Header from "../Header/Header";
import wave from "../../images/vector.svg";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import got from "../../images/gamesOfThrones.webp";
import ram from "../../images/rickMorty.jpg";
import mw from "../../images/MiracleWorkers.webp";

export default function FirstView() {
  return (
    <section className="FirstView">
      <img className="FirstView__wave" src={wave} alt="Волнушка" />
      <div className="FirstView__allContent">
        {/*атрибутами указываются элементы объекта, передаваемого в функцию Header*/}
        <Header className="FirstView__header" />
        <div className="FirstView__content">
          <Carousel />
          <div className="FirstView__right">
            <Heading level={5} color="primary">
              NEW ITEMS
            </Heading>
            <div className="FirstView__cards">
              <Card
                number="01"
                image={got}
                color="indigo"
                title="GAME OF THRONES"
                subtitle="SEASON 8"
                rating={4}
                quality="HD"
              />
              <Card
                number="02"
                image={ram}
                color="green"
                title="RICK AND MORTY"
                subtitle="SEASON 5"
                rating={5}
                quality="HD"
              />
              <Card
                number="03"
                image={mw}
                color="blue"
                title="MIRACLE wORKERS"
                subtitle="SEASON 3"
                rating={3}
                quality="HD"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

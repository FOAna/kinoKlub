import "./Carousel.css";
import Heading from "../Heading/Heading";
import Rating from "../Rating/Rating";
import PlayButton from "../PlayButton/PlayButton";
import arrow from "../../images/arrow.svg";
import { useState } from "react";
import joker from "../../images/joker&batman.png";
import neo from "../../images/neo.png";
import gentlemen from "../../images/the-gentlemen.png";
import joker2 from "../../images/joker.png";

// export нужен для импорта в другом файле
// default должен быть один в файле, самая основная функция файла
// компонент следит за изменением props(передаются извне) и state(внутреннее состояние)
// компоненты бывают функциональные и классовые(render)
export default function Carousel() {
  const films = [
    {
      image: joker,
      title: "Joker:",
      subtitle: "The Dark Knight",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
      genre: "Fantasy",
      year: "2008",
    },
    {
      image: neo,
      title: "The Matrix:",
      subtitle: "Resurrections",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
      genre: "Fantasy",
      year: "2021",
    },
    {
      image: gentlemen,
      title: "The Gentlemen",
      subtitle: "",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
      genre: "Crime",
      year: "2019",
    },
    {
      image: joker2,
      title: "Test Film",
      subtitle: "Оно живое!",
      rating: 1,
      description: "Надо же, оно работает!",
      genre: "Horror",
      year: "2022",
    },
  ];
  const [index, setIndex] = useState(0); // index - переменная, за изменением которой следим (если она поменяется, снова выполнится функция Carousel)
  // setIndex - функция, которая меняет значение index (вместо index = )

  const prev = index === 0 ? films.length - 1 : index - 1;
  const next = index === films.length - 1 ? 0 : index + 1;

  return (
    <div className="Carousel">
      <img
        className="Carousel__foreground Carousel__foreground_prev"
        src={films[prev].image}
        alt="Джокер"
      />
      <img
        className="Carousel__foreground Carousel__foreground_curr"
        src={films[index].image}
        alt="Джокер"
      />
      <img
        className="Carousel__foreground Carousel__foreground_next"
        src={films[next].image}
        alt="Джокер"
      />

      <div className="Carousel__graphics">
        <div className="Carousel__point"></div>
        <div className="Carousel__line"></div>
      </div>
      <div className="Carousel__text">
        <Heading
          level={5}
          color="secondary"
          className="Carousel__sectionHeading"
        >
          POPULAR
        </Heading>
        <Heading level={2} color="primary">
          {films[index].title}
        </Heading>
        <Heading level={2} color="primary" className="Carousel__thinnerText">
          {films[index].subtitle}
        </Heading>
        <div className="Carousel__rating">
          <span className="Carousel__ratingText">Rating</span>
          <Rating
            className="Carousel__ratingStars"
            rating={films[index].rating}
            size="m"
          />
        </div>
        <p className="Carousel__filmDescription">{films[index].description}</p>
        <span className="Carousel__genre">{films[index].genre}</span>
        <span className="Carousel__year">{films[index].year}</span>
        <div className="Carousel__buttons">
          <PlayButton className="Carousel__playButton">WATCH ONLINE</PlayButton>
          <div className="Carousel__switch">
            <button
              className="Carousel__arrowLeft"
              onClick={() => {
                setTimeout(() => {
                  if (index > 0) {
                    setIndex(index - 1);
                  } else if (index === 0) {
                    setIndex(films.length - 1);
                  }
                }, 200);
              }}
            >
              <img
                className="Carousel__arrowLeftImg"
                src={arrow}
                alt="Стрелыч"
              />
            </button>
            <button
              className="Carousel__arrowRight"
              onClick={() => {
                if (index < films.length - 1) {
                  setIndex(index + 1);
                } else if (index === films.length - 1) {
                  setIndex(0);
                }
              }}
            >
              <img
                className="Carousel__arrowRightImg"
                src={arrow}
                alt="Стрелыч"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

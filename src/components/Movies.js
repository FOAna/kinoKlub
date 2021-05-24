import { useState } from "react";
import Modal from "./Modal";
import "./Movies.css";
import Rating from "./Rating";

export default function Movies() {
  const movies = [
    {
      name: "Матрица",
      year: 1999,
      image:
        "https://www.magazinmatik.com/wp-content/uploads/2020/02/mATRİX.jpeg",
      videolink: "https://www.youtube.com/embed/watch?v=YihPA42fdQ8",
      videowidth: "0px",
      videoheight: "0px",
      rating: 0,
    },
    {
      name: "Джентльмены",
      year: 2020,
      image:
        "https://i.pinimg.com/originals/99/11/ee/9911ee2ba61e815cca2cef1fd260d76e.jpg",
      videolink: "https://rutube.ru/play/embed/13832592",
      videowidth: "0px",
      videoheight: "0px",
      rating: 0,
    },
  ];

  const [isModalOn, changeModal] = useState(false);

  function changerating(num, index) {
    movies[index].rating = num;
    console.log(movies);
  }

  function onClick() {
    return () => {
      changeModal(true);
    };
  }

  function onClose() {
    return () => {
      changeModal(false);
    };
  }

  return (
    <div className="Movies">
      <ul className="Movies__list">
        {movies.map((item, index) => {
          return (
            <li className="Movies__item">
              <h3>{`${item.name} (${item.year} год)`}</h3>
              <img src={item.image} width="600px" />
              <Rating onChange={changerating} index={index} />
              <button onClick={onClick()}>Смотреть</button>
              {isModalOn && (
                <Modal onClose={onClose}>
                  <iframe
                    width="100%" //`${item.width}px`
                    height="100%"
                    src={item.videolink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Modal>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

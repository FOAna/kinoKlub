import "./Movies.css";

export default function Movies() {
  const movies = [
    {
      name: "Матрица",
      year: 1999,
      image:
        "https://www.magazinmatik.com/wp-content/uploads/2020/02/mATRİX.jpeg",
    },
    {
      name: "Джентльмены",
      year: 2020,
      image:
        "https://i.pinimg.com/originals/99/11/ee/9911ee2ba61e815cca2cef1fd260d76e.jpg",
    },
  ];
  return (
    <div className="Movies">
      <ul className="Movies__list">
        {movies.map((item) => {
          return (
            <li className="Movies__item">
              <h3>{`${item.name} (${item.year} год)`}</h3>
              <img src={item.image} width="600px" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

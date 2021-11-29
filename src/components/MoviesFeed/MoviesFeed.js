import "./MoviesFeed.css";
import MovieCard from "./components/MovieCard/MovieCard";
import sp from "../../images/southPark2.jpg";
import ae from "../../images/avengers-endgame.jpg";
import oc from "../../images/oculus.jpg";

export default function MoviesFeed() {
  return (
    <div className="MoviesFeed">
      <MovieCard
        image={sp}
        isSelected="false"
        title="South Park"
        quality="HD"
        genre="Animation"
        director="Trey Parker, Eric Stough"
        fees="no data"
        year="since 1997"
      />
      <MovieCard
        image={ae}
        isSelected="true"
        title="AVENGERS: ENDGAME"
        quality="HD"
        genre="Fantasy"
        director="Anthony Russo, Joe Russo"
        fees="$2 797 501 328"
        year="2019"
      />
      <MovieCard
        image={oc}
        isSelected="false"
        title="Oculus"
        quality="HD"
        genre="Horror"
        director="Mike Flanagan"
        fees="$44 446 287"
        year="2013"
      />
    </div>
  );
}

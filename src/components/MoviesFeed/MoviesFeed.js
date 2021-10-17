import "./MoviesFeed.css";
import MovieCard from "./components/MovieCard/MovieCard";
import sp from "../../images/southPark.jpg";
import ae from "../../images/avengers-endgame.jpg";
import oc from "../../images/oculus.jpg";

export default function MoviesFeed() {
  return (
    <div className="MoviesFeed">
      <MovieCard image={sp} title="South Park" />
      <MovieCard
        image={ae}
        isSelected
        title="AVENGERS: ENDGAME"
        quality="HD"
        genre="Fantasy"
        director="Anthony Russo, Joe Russo"
        fees="$2 797 501 328"
        year="2019"
      />
      <MovieCard image={oc} title="Oculus" />
    </div>
  );
}

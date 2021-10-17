import "./MainPage.css";
import FirstView from "../components/FirstView/FirstView";
import MoviesFeed from "../components/MoviesFeed/MoviesFeed";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPage__firstView">
        <FirstView />
      </div>
      <div className="MainPage__carousel">
        <MoviesFeed />
      </div>
      <div className="MainPage__catalog"></div>
      <div className="MainPage__player"></div>
      <div className="MainPage__musicCatalog"></div>
      <div className="MainPage__subscribe"></div>
      <div className="MainPage__latestNews"></div>
      <div className="MainPage__footer"></div>
    </div>
  );
}

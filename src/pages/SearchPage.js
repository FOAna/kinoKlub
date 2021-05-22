import Header from "../components/Header";
import Footer from "../components/Footer";
import Movies from "../components/Movies";

export default function SearchPage() {
  return (
    <div className="SearchPage">
      <Header />
      Мои любимые фильмы
      <Movies />
      <Footer />
    </div>
  );
}

import logo from "../logo.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="MainPage">
      <Header>Дополнительный текст</Header>
      <img src={logo} />
      <div className="MainPage__test" />
      <Footer></Footer>
    </div>
  );
}

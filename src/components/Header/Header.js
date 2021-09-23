import "./Header.css";
import logo from "../../images/kinoClubLogo.svg";
import userIcon from "../../images/userIcon.JPG";
import searchIcon from "../../images/search.svg";
import burgerMenuIcon from "../../images/burger.svg";

export default function Header() {
  return (
    <div className="Header">
      <header className="Header__content">
        <div className="Header__leftPart">
          <img
            className="Header__logo"
            src={logo}
            alt="Логотипчик"
            height="64"
          />
          <ul className="Header__menuList">
            <li className="Header__menuItem">
              <a className="Header__menuItemLink" href="/">
                Популярное
              </a>
            </li>
            <li className="Header__menuItem">
              <a className="Header__menuItemLink" href="/">
                Фильмы
              </a>
            </li>
            <li className="Header__menuItem">
              <a className="Header__menuItemLink" href="/">
                Сериалы
              </a>
            </li>
            <li className="Header__menuItem">
              <a className="Header__menuItemLink" href="/">
                Мультфильмы
              </a>
            </li>
            <li className="Header__menuItem">
              <a className="Header__menuItemLink" href="/">
                Избранное
              </a>
            </li>
            <li className="Header__menuItem">
              <a className="Header__menuItemLink" href="/">
                Анонсы
              </a>
            </li>
          </ul>
        </div>

        <div className="Header__menuControlls">
          <a className="Header__userAccount" href="/">
            <span className="Header__userName">Анастасия</span>
            <img
              className="Header__userIcon"
              src={userIcon}
              alt="Настюша"
              width="64px"
            />
          </a>
          <button className="Header__search">
            <img src={searchIcon} alt="Поиск" width="32" />
          </button>
          <button className="Header__burgerMenu">
            <img src={burgerMenuIcon} alt="Менюшка" height="32" />
          </button>
        </div>
      </header>
    </div>
  );
}

import { NavLink } from "react-router-dom";
import cart from "../../assets/img/Shopping.svg";
import style from "./Header.module.css";
import flower_logo from "../../assets/img/flower_logo.png"

const Header = ({ setActive }) => {
  return (
    <header>
      <NavLink to={"/"}>
        <div className={style.logo}>
          <img src={flower_logo} alt="" />
          Flowers Store
          </div>
      </NavLink>
      <nav className={style.nav}>
        <NavLink className={style.navlink} to={"/"}>
          Главная
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Каталог
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
         Акции
        </NavLink>
      </nav>
      <div className={style.btns_header}>
        <div className={style.ikon} onClick={() => setActive(true)}>
          <img className={style.cart_icon} src={cart} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

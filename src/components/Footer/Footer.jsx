import { NavLink } from "react-router-dom";
import cart from "../../assets/img/Shopping.svg";
import style from "./footer.module.css";
import flower_logo from "../../assets/img/flower_logo.png"

const Footer = ({ setActive }) => {
  return (
    <footer>
      <div className={style.footer_container}>
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
      
      <NavLink to={"/"}>
        <div className={style.logo}>
          <img src={flower_logo} alt="" />
          Flowers Store
          </div>
      </NavLink>
      </div>
    </footer>
  );
};

export default Footer;

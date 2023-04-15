import Catalog from "../Catalog/Catalog";
import style from "./Home.module.css";
import flowers1 from "../../assets/img/flowers1.png"
import { NavLink } from "react-router-dom";

const Home = () => {


    return (
        <>
            <div className="container">
                <div className={style.intro}>
                    <img src={flowers1} alt="" className="intro_left" />
                    <div className={style.intro_right}>
                        <h1 className={style.intro_title}>Роскошные цветы для важных моментов в жизни.</h1>
                        <p className={style.intro_text}>
                        Мы уделяем максимальное внимание каждому клиенту, чтобы создать букет, который выразит ваше восхищение, благодарность или симпатию. Наша команда мастеров цветочного искусства воплощает любые ваши идеи в жизнь, создавая шедевры из цветов.
                        </p>
                        <div className={style.intro_button_container}>
                            <NavLink className={style.intro_btn} to={"/"}>
                                Подробнее
                            </NavLink>
                        </div>

                    </div>
                </div>
                <Catalog/>
            </div>
        </>
    )
}

export default Home
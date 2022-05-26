import { CTA } from "./CTA";
import style from "./Header.module.css";
import ME from "../../assets/DX.jpg";
import { HeaderSocial } from "./HeaderSocial";
export const Header = () => {
  return (
    <header id="home">
      <div className={`container ${style.header__container}`}>
        <h5>Hola Soy</h5>
        <h1>Kenneth Mazuelos</h1>
        <h5 className={`text-light`}>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial/>
        <div className={style.me}>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className={style.scroll__down}>Scroll Down</a>
      </div>
    </header>
  );
};

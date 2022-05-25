import { CTA } from "./CTA";
import style from "./Header.module.css";
import ME from "../../assets/me.png";
import { HeaderSocial } from "./HeaderSocial";
export const Header = () => {
  return (
    <header>
      <div className={`container ${style.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
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

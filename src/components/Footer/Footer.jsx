import style from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
export const Footer = () => {
  return (
    <footer>
      <a href="#home" className={style.footer__logo}>
        Kenzhul
      </a>
      <ul className={style.permalinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
   
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
    
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={style.footer__socials}>
        <a href="https://www.linkedin.com/in/julio-kenneth-andersson-mazuelos-vargas-kenzhul/">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/julio-kenneth-andersson-mazuelos-vargas-kenzhul/">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/in/julio-kenneth-andersson-mazuelos-vargas-kenzhul/">
          <IoLogoTwitter />
        </a>
      </div>
      <div className={style.footer__copyright}>
        <small>&copy; Kenzhul. All rights reserverd.</small>
      </div>
    </footer>
  );
};

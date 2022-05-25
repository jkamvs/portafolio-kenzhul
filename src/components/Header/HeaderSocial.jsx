import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import style from "./Header.module.css";
export const HeaderSocial = () => {
  return (
    <div className={style.header__socials}>
      <a
        href="https://www.linkedin.com/in/julio-kenneth-andersson-mazuelos-vargas-kenzhul/"
        target={"_blank"}
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/jkamvs" target={"_blank"}>
        <FaGithub />
      </a>
    </div>
  );
};

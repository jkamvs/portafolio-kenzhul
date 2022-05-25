import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import style from "./Nav.module.css";
import { useState } from "react";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={activeNav === "#" ? `${style.active}` : ""}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? `${style.active}` : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? `${style.active}` : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? `${style.active}` : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? `${style.active}` : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

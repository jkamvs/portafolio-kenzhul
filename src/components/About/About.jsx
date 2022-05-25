import style from "./About.module.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
export const About = () => {
  return (
    <section id={"about"}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className={`container ${style.about__container}`}>
        <div className={style.about__me}>
          <div className={style.about__me__image}>
            <img src={ME} alt="" />
          </div>
        </div>
        <div className={style.about__content}>
          <div className={style.about__cards}>
            <article className={style.about__card}>
              <FaAward className={style.about__icon} />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className={style.about__card}>
              <FiUsers className={style.about__icon} />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className={style.about__card}>
              <VscFolderLibrary className={style.about__icon} />
              <h5>Projects</h5>
              <small>80+ complete</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente beatae nesciunt illum fugit voluptas deleniti nihil sint facere, hic odio ab quo non quia, nobis enim! Dolor molestiae alias doloremque.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

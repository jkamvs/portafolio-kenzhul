import style from "./About.module.css";
import ME from "../../assets/kenneth-Uni.jpg";
import { FaAward } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
export const About = () => {
  return (
    <section id={"about"}>
      <h5>Llega a saber!</h5>
      <h2>Sobre mí</h2>
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
              <h5>Experiencia</h5>
              <small>1+ años de conocimientos</small>
            </article>
            <article className={style.about__card}>
              <BiBookOpen className={style.about__icon} />
              <h5>Autodidacta</h5>
              <small>free code</small>
            </article>
            <article className={style.about__card}>
              <VscFolderLibrary className={style.about__icon} />
              <h5>Proyectos</h5>
              <small>2 completo</small>
            </article>
          </div>

          <p>
            Mis habilidades se basan en el STACK PERN (React.js, Node.js,
            Express.js y PostgreSQL) y Starck Mern (MongoDB, Express.js,
            React,js y Node.js), con capacidad de adaptarme y seguir mejorando
            con nuevas tecnologías.
          </p>
          <a href="#contact" className="btn btn-primary">
            Hablemos!
          </a>
        </div>
      </div>
    </section>
  );
};

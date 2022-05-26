import style from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const Experience = () => {
  return (
    <section id={"experience"}>
      <h5>Que Habilidades Tengo</h5>
      <h2>Mi experiencia</h2>
      <div className={`container ${style.experience__container}`}>
        <div className={style.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={style.experience__content}>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>HTML</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>CSS</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>JavaScript</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>bootstrap</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>Redux</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>React</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className={style.experience__backend}>
          <h3>Backend Development</h3>
          <div className={style.experience__content}>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>Node JS</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>MongoDB</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>PHP</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>MySQL</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>Express JS</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>PostgreSQL</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
            <article className={style.experience__details}>
              <BsPatchCheckFill className={style.experience__details__icon} />
              <div>
                <h4>Sequelize</h4>
                <small className={`text-light`}>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

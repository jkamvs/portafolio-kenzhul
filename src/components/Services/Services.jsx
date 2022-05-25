import style from "./Services.module.css";
import { BiCheck } from "react-icons/bi";

export const Services = () => {
  return (
    <section id={"services"}>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className={`container ${style.services__container}`}>
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>UI/UX Design</h3>
          </div>
          <ul className={style.service__list}>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>Web Development</h3>
          </div>
          <ul className={style.service__list}>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        <article className={style.service}>
          <div className={style.service__head}>
            <h3>Content Creation</h3>
          </div>
          <ul className={style.service__list}>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className={style.service__list_icon} />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

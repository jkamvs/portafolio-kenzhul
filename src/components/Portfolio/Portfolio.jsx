import style from "./Portfolio.module.css";
//480 360
export const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: require("../../assets/Henry-Dogs.png"),
      title: "Pagina de Perros",
      github: "https://github.com/jkamvs/PI-Dogs-main",
      demo: "https://pi-dogs-main-ebon.vercel.app/",
    },
    {
      id: 2,
      image: require("../../assets/portfolio2.jpg"),
      title: "This is a portfolio item title",
      github: "https://github.com/jkamvs",
      demo: "https://github.com/jkamvs",
    },
    {
      id: 3,
      image: require("../../assets/portfolio3.jpg"),
      title: "This is a portfolio item title",
      github: "https://github.com/jkamvs",
      demo: "https://github.com/jkamvs",
    },
    {
      id: 4,
      image: require("../../assets/portfolio4.jpg"),
      title: "This is a portfolio item title",
      github: "https://github.com/jkamvs",
      demo: "https://github.com/jkamvs",
    },
    {
      id: 5,
      image: require("../../assets/portfolio5.png"),
      title: "This is a portfolio item title",
      github: "https://github.com/jkamvs",
      demo: "https://github.com/jkamvs",
    },
    {
      id: 6,
      image: require("../../assets/portfolio6.jpg"),
      title: "This is a portfolio item title",
      github: "https://github.com/jkamvs",
      demo: "https://github.com/jkamvs",
    },
  ];

  return (
    <section id={"portfolio"}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${style.portfolio__container}`}>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className={style.portfolio__item}>
              <div className={style.portfolio__item__image}>
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className={style.portfolio__item__cta}>
                <a href={github} className="btn" target={"_blank"}>
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

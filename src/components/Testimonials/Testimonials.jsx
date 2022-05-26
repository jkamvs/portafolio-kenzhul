import style from "./Testimonials.module.css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: require("../../assets/avatar1.jpg"),
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia recusandae fuga nobis at accusamus provident mollitia minima deleniti saepe!",
    },
    {
      id: 2,
      avatar: require("../../assets/avatar2.jpg"),
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia recusandae fuga nobis at accusamus provident mollitia minima deleniti saepe!",
    },
    {
      id: 3,
      avatar: require("../../assets/avatar3.jpg"),
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia recusandae fuga nobis at accusamus provident mollitia minima deleniti saepe!",
    },
    {
      id: 4,
      avatar: require("../../assets/avatar4.jpg"),
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia recusandae fuga nobis at accusamus provident mollitia minima deleniti saepe!",
    },
  ];

  return (
    <section id={"testimonials"}>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className={`container ${style.testimonials__container}`}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
      >
        {data.map(({ id, avatar, review }) => {
          return (
            <SwiperSlide key={id} className={style.testimonial}>
              <div className={style.client__avatar}>
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className={style.client__review}>Ernest Achiever</h5>
              <small className={style.client__review}>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

import style from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lq4ktxm',
        "template_kjht179",
        form.current,
        "g8kK8CofyC43XLtNH"
      );
      e.target.reset()
  };

  return (
    <section id={"contact"}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${style.contact__container}`}>
        <div className={style.contact__options}>
          <article className={style.contact__option}>
            <MdOutlineEmail className={style.contact__option__icon} />
            <h4>Email</h4>
            <h5>kennethmazuelosvargas.km @gmail.com</h5>
            <a href="mailto:kennethmazuelosvargas.km@gmail.com">
            Enviar mensaje
            </a>
          </article>
          <article className={style.contact__option}>
            <RiMessengerLine className={style.contact__option__icon} />
            <h4>Messenger</h4>
            <h5>Julio kenneth Mazuelos Vargas</h5>
            <a href="https://www.messenger.com/t/100001291502584">
            Enviar mensaje
            </a>
          </article>
          <article className={style.contact__option}>
            <BsWhatsapp className={style.contact__option__icon} />
            <h4>WhatsApp</h4>
            <h5>+51 921 874 847</h5>
            <a href="https://api.whatsapp.com/send?phone=51921874847&text=Mas%20Informaci%C3%B3n">
            Enviar mensaje
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
          Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

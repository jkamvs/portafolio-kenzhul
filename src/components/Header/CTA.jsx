import style from "./Header.module.css";

export const CTA = () => {
  let CV =
    "https://docs.google.com/document/d/1-GsA_aa1ft2qzBfAOQC3bAQfiGj8QW1K_kWCRc2BigE/edit";
  return (
    <div className={style.cta}>
      <a href={CV} download className="btn">
      View CV
      </a>
      <a href="#contact" className="btn btn-primary">Hablemos!</a>
    </div>
  );
};

import React from "react";
import compromisoImg from "../../assets/img/compromiso.png";
import seguridadImg from "../../assets/img/seguridad.png";
import codificacionImg from "../../assets/img/codificacion.png";

const Auditamos = () => {
  const info = [
    {
      image: compromisoImg,
      text: "Compromiso",
    },
    {
      image: seguridadImg,
      text: "Seguridad",
    },
    {
      image: codificacionImg,
      text: "Codificación",
    },
  ];
  return (
    <div className="component-auditamos">
      <h1>Auditamos por niveles de seguridad y confiabilidad</h1>
      <div className="container-map-auditamos">
        {info.map((inf, index) => {
          return (
            <div className="container-img-text" key={index}>
              <div
                className={`container-img-a ${
                  inf.text === "Compromiso" ? "container-img-compromiso" : ""
                }`}
              >
                <img src={inf.image} alt="" />
              </div>
              <p
                className={`title-img ${
                  inf.text === "Compromiso" ? "--title-img-compromiso" : ""
                }`}
              >
                {inf.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Auditamos;

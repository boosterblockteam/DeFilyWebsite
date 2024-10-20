import React from "react";
import DesarrollamosImg from "../../assets/img/desarrollamos.png";
import IntegracionImg from "../../assets/img/integracion.png";

const DesarrolloIntegracion = () => {
  const info = [
    {
      nameID: "desarrollamos",
      image: DesarrollamosImg,
      title: "Desarrollamos tu proyecto cumpliendo con tus expectativas",
      text1:
        "Descubre el poder del desarrollo de aplicaciones para materializar tus ideas en una experiencia interactiva y funcional.",
      text2: "¡Transforma tu visión en realidad digita!",
    },
    {
      nameID: "integracion",
      image: IntegracionImg,
      title: "Integración con diseños propios e intuitivos",
      text1:
        "Cada línea de código, cada ícono y cada animación se entrelazan para tejer una experiencia mágica donde navegar es un arte y la experiencia de usuario es el mapa estelar que guía a los navegantes hacia la felicidad y la comodidad.",
      text2:
        "Detrás de cada aplicación exitosa hay un equipo de desarrolladores apasionados donde la creatividad y la tecnología se fusionan para entregar lo que deseas.",
    },
  ];

  return (
    <div className="component-desarrollamos-integracion">
      {info.map((data, index) => {
        return (
          <div
            className={`container d-flex ${
              data.nameID === "integracion"
                ? " flex-column flex-sm-row-reverse spaceUp"
                : "flex-column flex-sm-row"
            }`}
            key={index}
          >
            <div className="container-image">
              <img src={data.image} alt="imagen" />
            </div>
            <div className="container-content">
              <h2
                className={` title ${
                  data.nameID === "integracion" ? "title-red" : "title-blue"
                }`}
              >
                {data.title}
              </h2>
              <p className="text1">{data.text1}</p>
              <p className="text2">{data.text2}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesarrolloIntegracion;

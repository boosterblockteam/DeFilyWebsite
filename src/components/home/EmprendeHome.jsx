import React from "react";
import emprendeImg from "../../assets/img/emprendeIMG.png";
import soporteImg from "../../assets/svg/Icon_soporte_tecnico.svg";
import asistenciaImg from "../../assets/svg/Icon_asistencia_24_7.svg";
import equipoImg from "../../assets/svg/Icon_equipo_calidad.svg";

const EmprendeHome = () => {
  const info = [
    {
      image: soporteImg,
      text: "Soporte Técnico",
    },
    {
      image: asistenciaImg,
      text: "Asistencia 24/7",
    },
    {
      image: equipoImg,
      text: "Equipo de Calidad",
    },
  ];

  return (
    <div className="component-emprendeHome">
      <div className="container">
        <div className="container-image">
          <img src={emprendeImg} alt="" />
        </div>
        <div className="container-content">
          <div className="info-up">
            <h2>
              ¡Descubre el poder de la tecnología blockchain con nosotros!
            </h2>
            <p>
              Nuestro equipo de expertos está listo para brindarte soluciones
              innovadoras y seguras para tus necesidades en la industria.
            </p>
            <button>Contáctanos</button>
          </div>
          <div className="info-down">
            {info.map((data, index) => {
              return (
                <div className="container-img-text" key={index}>
                  <img src={data.image} alt="" />
                  <p>{data.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmprendeHome;

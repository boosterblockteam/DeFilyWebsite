import React from "react";
import auditoriaIcon from "../../assets/svg/auditoriadeContratos.svg";
import asesoramientoImg from "../../assets/svg/security.svg";
import modeladoImg from "../../assets/svg/modeladoAmenazas.svg";

const ServiciosA = () => {
  const infoCard = [
    {
      image: auditoriaIcon,
      title: "Auditoría de contratos inteligentes",
      text: "Mediante el uso de técnicas avanzadas de revisión de código y pruebas de seguridad, evaluamos la lógica del contrato, la gestión de riesgos y la protección contra ataques maliciosos.",
    },
    {
      image: asesoramientoImg,
      title: "Asesoramiento en seguridad empresarial",
      text: "Protege tus activos, clientes y reputación con una sólida estrategia que permite innovar y crecer sin temor a los riesgos que acechan en el mundo actual.",
    },
    {
      image: modeladoImg,
      title: "Modelado de amenazas",
      text: "Al identificar y eliminar las vulnerabilidades en tu ecosistema digital, cerrando la puerta a posibles ataques.",
    },
  ];

  return (
    <div className="component-serviciosA">
      <div className="container-text">
        <h1>Servicios de auditoría</h1>
        <p>
          Ofrecemos soluciones de auditoría blockchain líderes en la industria
          asegurando la integridad y autenticidad de cada registro:
        </p>
      </div>
      <div className="container-map row">
        {infoCard.map((card, index) => {
          return (
            <div
              className={`card cardContainer col-12 sm-col-4 ${
                card.title === "Modelado de amenazas" ? "me-0" : ""
              }`}
              key={index}
            >
              <div className="container-img">
                <img src={card.image} className="card-img-top" alt="..." />
              </div>

              <div className="card-body container-info">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiciosA;

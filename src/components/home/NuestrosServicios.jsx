import React, { useState } from "react";

const NuestrosServicios = () => {
  const info = [
    {
      isOpen: false,
      id: 1,
      title: "Consultoría Blockchain",
      text: "Proporcionamos asesoramiento experto en el desarrollo web3.0, incluyendo la elección de la plataforma blockchain adecuada, la arquitectura de la aplicación, la tokenización de activos y la implementación de soluciones escalables.",
    },
    {
      isOpen: false,
      id: 2,
      title: "Desarrollo de DApps",
      text: "Nuestro equipo de desarrolladores altamente capacitados crea DApps intuitivas y escalables utilizando tecnologías líderes en blockchain, como Solidity y Web3.js.",
    },
    {
      isOpen: false,
      id: 3,
      title: "Auditorías de Contratos Inteligentes",
      text: "Nuestro equipo de auditores especializados realiza análisis exhaustivos de contratos inteligentes para identificar posibles vulnerabilidades y asegurar su robustez.",
    },
  ];

  const [infoCard, setInfoCard] = useState(info);

  const handleClickCard = (id) => {
    const cardSelect = infoCard.map((element) => {
      if (element.id === id) {
        if (element.isOpen) {
          element.isOpen = false;
        } else {
          element.isOpen = true;
        }
      }
      return element;
    });

    setInfoCard(cardSelect);
  };

  return (
    <div className="component-nuestros-services">
      <h2 className="title">Nuestros servicios</h2>
      <p className="parrafo">
        Descubre cómo nuestros servicios de blockchain abre nuevas oportunidades
        de negocio en un mundo digital descentralizado.
      </p>
      <div className="container-collage-img row">
        {infoCard.map((data, index) => {
          if (data.isOpen === false) {
            return (
              <div
                className={`container-img-text col-12 sm-col-4 ${
                  data.id === 1
                    ? "--bgConsultoria"
                    : data.id === 2
                    ? "--bgDesarrollo"
                    : "--bgAuditoria"
                }`}
                key={index}
                onClick={() => handleClickCard(data.id)}
              >
                <h2 className="title-img">{data.title}</h2>
              </div>
            );
          } else {
            return (
              <div
                className={`container-img-text col-12 sm-col-4 ${
                  data.id === 1
                    ? "--bgConsultoria"
                    : data.id === 2
                    ? "--bgDesarrollo"
                    : "--bgAuditoria"
                }`}
                key={index}
              >
                <p
                  className={`text ${
                    data.id === 1
                      ? "--bgConsultoriaColor"
                      : data.id === 2
                      ? "--bgDesarrolloColor"
                      : "--bgAuditoriaColor"
                  } `}
                  onClick={() => handleClickCard(data.id)}
                >
                  {data.text}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NuestrosServicios;

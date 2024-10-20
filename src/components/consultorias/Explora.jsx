import React, { useState } from "react";
import { ReactComponent as IconCalidad } from "../../assets/svg/icon_calidad.svg";
import { ReactComponent as IconToken } from "../../assets/svg/icon_token.svg";
import { ReactComponent as IconPagos } from "../../assets/svg/icon_pagos.svg";
import { ReactComponent as IconContratos } from "../../assets/svg/icon_contratos.svg";
import { ReactComponent as IconMarketing } from "../../assets/svg/icon_marketing.svg";
import ControlProceso from "./ControlProceso";
import controlProcesoImg from "../../assets/img/controlProcesoImg.png";
import tokenizacionImg from "../../assets/img/tokenizacion.png";
import pasarelaPagosImg from "../../assets/img/pasarelaPago.png";
import contratosInteligentesImg from "../../assets/img/contratos-inteligentes.png";
import marketingBImg from "../../assets/img/marketingBlockchain.png";

const Explora = () => {
  const [buttonSelect, setButtonSelect] = useState("Control de proceso");

  const listButtons = [
    {
      icon: () => {
        return <IconCalidad />;
      },
      text: "Control de proceso",
    },
    {
      icon: () => {
        return <IconToken />;
      },
      text: "Tokenización de activos",
    },
    {
      icon: () => {
        return <IconPagos />;
      },
      text: "Pasarela de pagos",
    },
    {
      icon: () => {
        return <IconContratos />;
      },
      text: "Contratos inteligentes",
    },
    {
      icon: () => {
        return <IconMarketing />;
      },
      text: "Marketing blockchain",
    },
  ];

  const controlProcesoArray = {
    title1: "Control de proceso",
    description1:
      "Es importante garantizar que todos los procesos y relaciones comerciales cumplan con los estándares de calidad. Con el Blockchain, tendrás un sistema independiente e incorruptible, que puede utilizarse para verificar la calidad de los productos que vendes.",
    image1: controlProcesoImg,
  };

  const tokenizacion = {
    title2: "Tokenización de activos",
    description2:
      "Es un modelo de negocio transformador que tiene el potencial de generar nuevas formas de obtener capital, comerciar y compartir activos, sin intermediarios. Te ayudamos a superar las barreras legales y tecnológicas que puede encontrar al tokenizar activos.",
    image2: tokenizacionImg,
  };
  const pasarelaPagos = {
    title3: "Pasarelas de pagos",
    description3:
      "Aplicamos la modalidad de pago con criptomonedas para que los clientes puedan realizar operaciones de forma flexible con sus monederos privados, en cualquier momento y lugar.",
    image3: pasarelaPagosImg,
  };
  const contratosInteligentes = {
    title4: "Contratos Inteligentes",
    description4:
      "Son protocolos informáticos que facilitan, verifican o hacen cumplir la negociación o el cumplimiento de un contrato. Además, pueden utilizarse para reducir los costes de las transacciones, mejorar la seguridad y la confianza, al igual que permitir nuevos sistemas de pago, sin necesidad de intermediarios.",
    image4: contratosInteligentesImg,
  };

  const marketingBlockchain = {
    title5: "Marketing Blockchain",
    description5:
      "Con el apoyo de nuestros consultores, podrás conocer si los productos que ofreces pueden ser vinculados con nuestras aplicaciones descentralizadas para llevar una organización fácil y sencilla dentro de la empresa, además de bridar información segura y transparente a los clientes del estado de sus productos.",
    image5: marketingBImg,
  };

  return (
    <div className="component-explora">
      <h1 className="title">Explora nuestras consultorías</h1>
      <p className="text-descrip">
        Confía en nuestra experiencia para impulsar tu proyecto en la nueva era
        de la web descentralizada.
      </p>
      <div className="container-map-overflow">
        <div className="container-map">
          {listButtons.map((inf, index) => {
            return (
              <div
                className="container-icon-text"
                key={index}
                onClick={() => setButtonSelect(inf.text)}
              >
                <div className="container-icon">{inf.icon()}</div>
                <span className="text-img">{inf.text}</span>
              </div>
            );
          })}
        </div>
      </div>
      <ControlProceso
        controlProcesoArray={controlProcesoArray}
        tokenizacion={tokenizacion}
        pasarelaPagos={pasarelaPagos}
        contratosInteligentes={contratosInteligentes}
        marketingBlockchain={marketingBlockchain}
        buttonSelect={buttonSelect}
      />
    </div>
  );
};

export default Explora;

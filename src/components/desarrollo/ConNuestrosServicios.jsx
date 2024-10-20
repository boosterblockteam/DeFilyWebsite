import React, { useState } from "react";
import { ReactComponent as IconMVP } from "../../assets/svg/consultoria_mvp.svg";
import { ReactComponent as IconDesarrollo } from "../../assets/svg/desarrollo_DID.svg";
import { ReactComponent as IconContratosI } from "../../assets/svg/contratos_inteligentes.svg";
import { ReactComponent as IconDiseñoUI } from "../../assets/svg/diseñoUI.svg";
import { ReactComponent as IconServicios } from "../../assets/svg/servicios_actualizar.svg";
import { ReactComponent as IconBlockchain } from "../../assets/svg/blockchain.svg";

const ConNuestrosServicios = () => {
  const listServicesUpInfo = [
    {
      isOpen: false,
      id: 1,
      icon: () => {
        return <IconMVP />;
      },
      title: "Consultoría MVP",
      text: "Nuestra guía de primer nivel es su mejor fuente para evaluar ideas y elegir las más valiosas. Las tendencias del mercado DAPP están aquí para ayudar a promover tus ofertas iniciales de monedas, para que puedas valorizar tu emprendimiento.",
    },
    {
      isOpen: false,
      id: 2,
      icon: () => {
        return <IconDesarrollo />;
      },
      title: "Desarrollo del intercambio descentralizado",
      text: "Mediante el uso de tecnología punta, podemos ofrecerte una infraestructura de Blockchain con los algoritmos criptográficos más avanzados y descentralizados para intercambian tokens sin intermediarios. Además, nuestra plataforma es altamente flexible, fácil de escalar y usar.",
    },
    {
      isOpen: false,
      id: 3,
      icon: () => {
        return <IconContratosI />;
      },
      title: "Contratos Inteligentes",
      text: "Son contratos digitales que se ejecutan automáticamente cuando se cumplen determinadas condiciones en la plataforma y nuestro objetivo es desarrollarlos de acuerdo a las necesidades de nuestros clientes, para que tengan una experiencia simple, segura y sencilla.",
    },
    {
      isOpen: false,
      id: 4,
      icon: () => {
        return <IconDiseñoUI />;
      },
      title: "Diseño UI / IX",
      text: "Utilizamos nuestro conocimiento experto para producir una interfaz elegante e intuitiva para los usuarios. Te ayudamos a elegir las mejores rutas de navegación, a definir la jerarquía de las páginas, a controlar el flujo de las mismas y a realizar diseños visuales.",
    },
    {
      isOpen: false,
      id: 5,
      icon: () => {
        return <IconServicios />;
      },
      title: "Servicios de actualización de DApps",
      text: "Somos responsables de todos los aspectos del proceso de actualización. Siempre que se necesite una actualización, proporcionamos un servicio sin interrumpir las experiencias de los usuarios. Simplemente tendrá que solicitarlo y nuestro equipo se pondrá en ello.",
    },
    {
      isOpen: false,
      id: 6,
      icon: () => {
        return <IconBlockchain />;
      },
      title: "Blockchain Privado",
      text: "La información, como los códigos de los productos, las cantidades y los precios, se registran y encriptan en una cadena de bloques para que sólo los participantes tengan acceso a ellos. Proporciona un entorno transparente, seguro y eficiente.",
    },
  ];

  const [listServicesUp, setListServicesUp] = useState(listServicesUpInfo);

  const handleClickCard = (id) => {
    const cardSelect = listServicesUp.map((element) => {
      if (element.id === id) {
        if (element.isOpen) {
          element.isOpen = false;
        } else {
          element.isOpen = true;
        }
      }
      return element;
    });

    setListServicesUp(cardSelect);
  };

  return (
    <div className="component-conNuestrosServicios">
      <h1>
        Con nuestros servicios de desarrollo DApp, podremos ayudarte aumentar la
        visibilidad, productividad y rendimiento de tu negocio.
      </h1>
      <div className="container-maps">
        <div className="container-map-up row">
          {listServicesUp.map((service, index) => {
            if (service.isOpen === false) {
              return (
                <div
                  className="container-img-text-sinText col-6 col-sm-4"
                  onClick={() => handleClickCard(service.id)}
                  key={index}
                >
                  <div className="img"> {service.icon()} </div>

                  <span className="title">{service.title}</span>
                </div>
              );
            } else {
              return (
                <div
                  className="container-img-text col-6 col-sm-4"
                  key={index}
                  onClick={() => handleClickCard(service.id)}
                >
                  <div className="img"> {service.icon()} </div>
                  <span className="title">{service.title}</span>
                  <p className="description">{service.text}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ConNuestrosServicios;

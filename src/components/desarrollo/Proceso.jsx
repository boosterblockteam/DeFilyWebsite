import React from "react";
import proceso1 from "../../assets/img/proceso01.png";
import proceso2 from "../../assets/img/proceso02.png";
import proceso3 from "../../assets/img/proceso03.png";
import proceso4 from "../../assets/img/proceso04.png";
import proceso5 from "../../assets/img/proceso05.png";
import proceso6 from "../../assets/img/proceso06.png";
import proceso7 from "../../assets/img/proceso07.png";
import proceso8 from "../../assets/img/proceso08.png";

const Proceso = () => {
  const info = [
    {
      nameClass: "proceso1",
      image: proceso1,
      title: "Análisis Comercial y Técnico",
      description:
        "Gracias a estos análisis, se obtendrán soluciones nuevas e innovadoras a preguntas como “¿cuáles son las necesidades de los clientes y cómo pueden servir para el resultado final del producto?”, e incluso al modelo de “¿cómo desarrollar la aplicación?",
    },
    {
      nameClass: "proceso2",
      image: proceso2,
      title: "Diseño de Arquitectura",
      description:
        "Tras hacer los análisis previos, se procede a realizar el diseño arquitectónico de la aplicación, incluyendo un plan sobre cómo interactúan la capa de front-end, la interfaz de usuario, la capa de back-end, los smart contracts, el almacenamiento y el blockchain.",
    },
    {
      nameClass: "proceso3",
      image: proceso3,
      title: "Diseños de baja y alta fidelidad",
      description:
        "El diseño de baja fidelidad se utiliza durante una fase conceptual o exploratoria y ayuda a determinar si un proyecto es viable o no. Por el contrario, el de alta fidelidad se utiliza para crear un prototipo presentable a las partes interesadas.",
    },
    {
      nameClass: "proceso4",
      image: proceso4,
      title: "Desarrollo de contratos inteligentes / billeteras",
      description:
        "Se construye los contratos inteligentes y la integración de la cartera para facilitar el intercambio de tokens con nuestra DApp. El proceso importante hace posible evitar perder sus monedas desde la venta inicial, asegurando su satisfacción con nuestro.",
    },
    {
      nameClass: "proceso5",
      image: proceso5,
      title: "Desarrollo back-end / front-end",
      description:
        "Una vez finalizados los diseños de fidelidad, pasamos a esta fase del proceso. Los procesos de back-end, permiten mantener la aplicación empresarial para nuestros usuarios. El front-end se realiza en lenguajes que hacen llamadas a la API del back-end como VueJS, ReactJS.",
    },
    {
      nameClass: "proceso6",
      image: proceso6,
      title: "Auditoría interna",
      description:
        "Se encarga de revisar las etapas anteriores de desarrollo, donde un equipo de auditores comprueba que el sistema funciona de forma eficaz y eficiente, a su vez que cumplan con las normas de calidad y cumplimiento.",
    },
    {
      nameClass: "proceso7",
      image: proceso7,
      title: "Ejecución de pruebas",
      description:
        "Confirmará si el producto cumple con los requisitos previstos. Incluye controles como derechos de acceso, funciones de supervisión y cifrado, con una seguridad superior. Entregando así, la tranquilidad de los clientes a saber que tienen lo que deseaban.",
    },
    {
      nameClass: "proceso8",
      image: proceso8,
      title: "Instalación de la red principal",
      description:
        "En esta última fase del proceso, tu DApp es segura y estará disponible para el mayor público posible. Esta red fue diseñada con una arquitectura y protocolos altamente escalables, lo que le permite soportar varias aplicaciones y millones de usuarios.",
    },
  ];

  return (
    <div className="component-proceso-desarrollo">
      <div className="container-text">
        <h1 className="title-proceso">Sistema de desarrollo DApps</h1>
        <p className="text-proceso">
          Para que nuestros clientes reciban un producto final desde el diseño
          de la interfaz de usuario hasta la implementación del contrato
          inteligente y la integración con blockchain, nos encargamos de cada
          paso del proceso de desarrollo como se muestra a continuación:
        </p>
      </div>
      <div className="container-map row">
        {info.map((info, index) => {
          return (
            <div className={`container col-6 sm-col-3`} key={index}>
              <div className="container-img">
                <img src={info.image} alt="" />
              </div>
              <h2 className={`title ${info.nameClass}`}>{info.title}</h2>
              <p className="description">{info.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Proceso;

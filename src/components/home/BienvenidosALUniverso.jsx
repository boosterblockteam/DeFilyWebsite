import React from "react";
import consultoriaImg from "../../assets/img/card1Bienvenidos.png";
import desarrolloImg from "../../assets/img/card2Bienvenidos.png";
import auditoriaImg from "../../assets/img/card3Bienvenidos.png";

const BienvenidosALUniverso = () => {
  const cardBienvenidos = [
    {
      image: consultoriaImg,
      title: "Consultorías",
      text: "El ecosistema de la web3.0 está en constante evolución, y en BoosterBlook nos mantenemos a la vanguardia de las últimas tendencias y tecnologías.",
      textBtn: "Ver más",
    },
    {
      image: desarrolloImg,
      title: "Desarrollo",
      text: "¿Tienes una idea para una aplicación descentralizada? En BoosterBlook, revolucionamos la confianza y la transparencia en cada línea de código.",
      textBtn: "Ver más",
    },
    {
      image: auditoriaImg,
      title: "Auditorías",
      text: "¿Listo para liberar el potencial de los contratos inteligentes? Nuestros auditores expertos te ayudarán a navegar por la complejidad blockchain.",
      textBtn: "Ver más",
    },
  ];
  return (
    <div className="component-bienvenidosAlUniverso">
      <div className="container-text">
        <h1>
          Únase al movimiento de Boosterblcok:{" "}
          <p>donde la innovación se encuentra con la imaginación</p>
        </h1>
        <p>
          Una empresa líder en el desarrollo de contratos inteligentes y
          servicios relacionados con la web3.0. Si estás buscando llevar tu
          proyecto al siguiente nivel en el ecosistema de blockchain, estás en
          el lugar correcto.
        </p>
      </div>
      <div className="container-cards">
        {cardBienvenidos.map((card, index) => {
          return (
            <div
              className={`card ${card.title === "Auditorías" ? "me-0" : ""}`}
              key={index}
            >
              <img src={card.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
              <button className=" button">{card.textBtn}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BienvenidosALUniverso;

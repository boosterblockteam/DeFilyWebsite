import React from "react";
import securityImg from "../../assets/img/securitySomos.png";

const SomosTuMejorSolucion = () => {
  return (
    <div className="component-somosTuMejorSolucion">
      <div className="container-img">
        <img src={securityImg} alt="" />
      </div>
      <div className="container-text">
        <h1>¡Desbloquea un futuro seguro!</h1>
        <p>
          Los hackers representan una amenaza constante, buscando
          vulnerabilidades en los protocolos, contratos inteligentes y carteras
          digitales para acceder y manipular datos o robar activos valiosos.
          Donde la integridad de la información es clave para garantizar la
          confianza en el sistema.
        </p>
      </div>
    </div>
  );
};

export default SomosTuMejorSolucion;

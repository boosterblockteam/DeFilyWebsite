import React from "react";
import Navbar from "./Navbar";
import FlechaIndica from "../assets/svg/arrow_circle_down.svg";

const HeaderHome = () => {
  return (
    <div className="component-headerHome">
      <Navbar />
      <div className="container-contentHome">
        <h1>¡Liberando el poder de Blockchain!</h1>
        <p>
          Nuestro equipo de expertos en blockchain se especializa en el diseño y
          la implementación de soluciones descentralizadas que brindan
          transparencia, seguridad y eficiencia en el intercambio de valor.
        </p>

        <div className="container-flechaHome">
          <img src={FlechaIndica} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;

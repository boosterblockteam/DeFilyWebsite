import React from "react";
import ServiciosInfo from "../components/ServiciosInfo";
import Contactanos from "../components/Contactanos";
import ConNuestrosServicios from "../components/desarrollo/ConNuestrosServicios";
import Proceso from "../components/desarrollo/Proceso";

const DesarrolloDapps = () => {
  return (
    <div className="page-desarrollo">
      <ServiciosInfo />
      <ConNuestrosServicios />
      <Proceso />
      <Contactanos />
    </div>
  );
};

export default DesarrolloDapps;

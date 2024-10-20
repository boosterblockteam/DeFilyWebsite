import React from "react";
import ServiciosInfo from "../components/ServiciosInfo";
import Explora from "../components/consultorias/Explora";
import CalidadTrabajo from "../components/consultorias/CalidadTrabajo";
import Contactanos from "../components/Contactanos";

const Consultorias = () => {
  return (
    <div className="page-consultorias">
      <ServiciosInfo />
      <Explora />
      <CalidadTrabajo />
      <Contactanos />
    </div>
  );
};

export default Consultorias;

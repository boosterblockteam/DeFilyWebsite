import React from "react";
import BienvenidosALUniverso from "../components/home/BienvenidosALUniverso";
import DesarrolloIntegracion from "../components/home/DesarrolloIntegracion";
import NuestrosServicios from "../components/home/NuestrosServicios";
import EmprendeHome from "../components/home/EmprendeHome";

const Inicio = () => {
  return (
    <div className="page-inicio">
      <BienvenidosALUniverso />
      <DesarrolloIntegracion />
      <NuestrosServicios />
      <EmprendeHome />
    </div>
  );
};

export default Inicio;

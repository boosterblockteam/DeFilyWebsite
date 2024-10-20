import React from "react";
import ServiciosInfo from "../components/ServiciosInfo";
import Contactanos from "../components/Contactanos";
import Auditamos from "../components/auditoria/Auditamos";
import ServiciosA from "../components/auditoria/ServiciosA";
import SomosTuMejorSolucion from "../components/auditoria/SomosTuMejorSolucion";
import ProcesoAudiencia from "../components/auditoria/ProcesoAudiencia";

const AuditoriaDeContratos = () => {
  return (
    <div className="page-auditoria">
      <ServiciosInfo />
      <Auditamos />
      <ServiciosA />
      <ProcesoAudiencia />
      <SomosTuMejorSolucion />
      <Contactanos />
    </div>
  );
};

export default AuditoriaDeContratos;

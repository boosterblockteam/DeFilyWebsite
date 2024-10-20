import React from "react";
import flechaDobleServices from "../assets/svg/double_arrow.svg";
import { useLocation } from "react-router-dom";

const ServiciosInfo = () => {
  const { pathname } = useLocation();

  const infoServices = {
    pageConsultoria: "Consultorías Blockchain ",
    pageDesarrollo: "Desarrollo de DApps",
    pageAuditoria: "Auditoría de Contratos Inteligentes",
  };

  return (
    <div className="component-services">
      <span className="nameServices">Servicios</span>
      <div className="container-img">
        <img src={flechaDobleServices} alt="" />
      </div>
      <span className="namePage">{`${
        pathname === "/ConsultoriasBlockchain"
          ? infoServices.pageConsultoria
          : pathname === "/DesarrolloDeDapps"
          ? infoServices.pageDesarrollo
          : infoServices.pageAuditoria
      }`}</span>
    </div>
  );
};

export default ServiciosInfo;

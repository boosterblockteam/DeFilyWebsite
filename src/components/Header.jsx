import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Header = ({
  infoHeaderConsultoria,
  infoHeaderDesarrollo,
  infoHeaderAuditoria,
}) => {
  const { background, title, description } = infoHeaderConsultoria;
  const { background2, title2, description2 } = infoHeaderDesarrollo;
  const { background3, title3, description3 } = infoHeaderAuditoria;

  const { pathname } = useLocation();

  return (
    <div
      className={`component-header ${
        pathname === "/ConsultoriasBlockchain"
          ? background
          : pathname === "/DesarrolloDeDapps"
          ? background2
          : background3
      }`}
    >
      <Navbar />
      <div className="container-content">
        <h1>{`${
          pathname === "/ConsultoriasBlockchain"
            ? title
            : pathname === "/DesarrolloDeDapps"
            ? title2
            : title3
        }`}</h1>
        <p>
          {`${
            pathname === "/ConsultoriasBlockchain"
              ? description
              : pathname === "/DesarrolloDeDapps"
              ? description2
              : description3
          }`}
        </p>
      </div>
    </div>
  );
};

export default Header;

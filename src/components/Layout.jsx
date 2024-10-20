import Footer from "./Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/inicio";
import Consultorias from "../pages/consultorias";
import DesarrolloDapps from "../pages/desarrolloDapps";
import AuditoriaDeContratos from "../pages/auditoriaDeContratos";
import HeaderHome from "./HeaderHome";
import Header from "./Header";

const Layout = () => {
  const { pathname } = useLocation();

  const infoHeaderConsultoria = {
    background: "--bgHeaderConsultoria",
    title: "Consultorías Blockchain",
    description:
      "Nuestra consultoría en desarrollo web3.0 se enfoca en la adopción de estándares descentralizados y tecnologías blockchain para impulsar la seguridad, transparencia y trazabilidad en las aplicaciones y plataformas digitales.",
  };

  const infoHeaderDesarrollo = {
    background2: "--bgHeaderDesarrollo",
    title2: "Desarrollo de DApps",
    description2:
      "Nuestro equipo de desarrolladores altamente capacitados crea DApps intuitivas y escalables utilizando tecnologías líderes en blockchain, como Solidity y Web3.js.",
  };

  const infoHeaderAuditoria = {
    background3: "--bgHeaderAuditoria",
    title3: "Auditoría de Contratos Inteligentes",
    description3:
      "Nuestros auditores expertos te ayudarán a navegar por la complejidad blockchain y asegurar un rendimiento impecable hacia una seguridad sin precedentes en tus operaciones.",
  };

  if (pathname === "/") {
    return (
      <div className="layout">
        <div>
          <HeaderHome />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ConsultoriasBlockchain" element={<Consultorias />} />
            <Route path="/DesarrolloDeDapps" element={<DesarrolloDapps />} />
            <Route
              path="/AuditoriaDeContratosInteligentes"
              element={<AuditoriaDeContratos />}
            />
            <Route
              path="*"
              element={
                <h2 className="text-center" style={{ color: "#001848" }}>
                  Page not found
                </h2>
              }
            />
          </Routes>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <div>
        <Header
          infoHeaderConsultoria={infoHeaderConsultoria}
          infoHeaderDesarrollo={infoHeaderDesarrollo}
          infoHeaderAuditoria={infoHeaderAuditoria}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ConsultoriasBlockchain" element={<Consultorias />} />
          <Route path="/DesarrolloDeDapps" element={<DesarrolloDapps />} />
          <Route
            path="/AuditoriaDeContratosInteligentes"
            element={<AuditoriaDeContratos />}
          />
          <Route
            path="*"
            element={
              <h2 className="text-center" style={{ color: "#001848" }}>
                Page not found
              </h2>
            }
          />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

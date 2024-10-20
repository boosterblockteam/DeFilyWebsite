import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Flecha from "../assets/svg/arrow_drop_down.svg";
import { useState } from "react";

const ButtonServices = () => {
  /** i18n */
  const { t } = useTranslation("");

  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="component-buttonServices">
      <button className="services-btn" onClick={() => setisOpen(!isOpen)}>
        <p className="services">Services</p>
        <img
          className={` ${isOpen ? "flechaOpen" : "flecha"}`}
          src={Flecha}
          alt=""
        />
      </button>
      <div className={`${isOpen ? "container-list-opciones1" : "hidden"}`}>
        <div className="container-options">
          <Link to="/ConsultoriasBlockchain" onClick={() => setisOpen(!isOpen)}>
            <button className="btn-Consultorias btns-opciones">
              Consultoría de Blockchain
            </button>
          </Link>

          <Link to="/DesarrolloDeDapps" onClick={() => setisOpen(!isOpen)}>
            <button className="btn-Desarrollo btns-opciones">
              Desarrollo de DApps
            </button>
          </Link>

          <Link
            to="/AuditoriaDeContratosInteligentes"
            onClick={() => setisOpen(!isOpen)}
          >
            <button className="btn-Auditoria btns-opciones">
              Auditorías de Smart Contracts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonServices;

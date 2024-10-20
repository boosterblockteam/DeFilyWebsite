import React from "react";
import numero1 from "../../assets/img/numero1Grupo.png";
import numero2 from "../../assets/img/numero2Grupo.png";
import numero3 from "../../assets/img/numero3Grupo.png";
import numero4 from "../../assets/img/numero4Grupo.png";
import circuloCentro from "../../assets/img/CenterProcesosAuditoria.png";
import IconConocimiento from "../../assets/svg/conocimientoYreporteIcon.svg";
import IconConformacion from "../../assets/svg/conformacionIcon.svg";
import IconProceso from "../../assets/svg/procesoAuditoriaIcon.svg";

const ProcesoAudiencia = () => {
  return (
    <div className="component-procesoAudiencia">
      <div className="container">
        <div className="container-cuadros-up row">
          <div className="container-card-conomientos col-6">
            <img className="img-numero1" src={numero1} alt="" />
            <div className="container-info">
              <div className="container-text">
                <h2>Conocimiento de Protocolo</h2>
                <p>
                  El primer paso es sencillo, solo tiene que realizar una
                  solicitud formal y podrá conocer nuestra propuesta de
                  auditoría.
                </p>
              </div>
              <div className="container-img">
                <img src={IconConocimiento} alt="" />
              </div>
            </div>
          </div>
          <div className="container-card-conformacion col-6">
            <img className="img-numero2" src={numero2} alt="" />
            <div className="container-info">
              <div className="container-text">
                <h2>Conformación del pago</h2>
                <p>
                  Recibimos la documentación y la información enviada por el
                  cliente una vez confirmada la operación.
                </p>
              </div>
              <div className="container-img">
                <img src={IconConformacion} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-cuadros-down row">
          <div className="container-card-proceso col-6">
            <img className="img-numero3" src={numero3} alt="" />
            <div className="container-info">
              <div className="container-text">
                <h2>Proceso de Auditoría</h2>
                <p>
                  Una vez analizada la información, se realiza y envía un
                  informe preliminar al cliente con los resultados obtenidos.
                </p>
              </div>
              <div className="container-img">
                <img src={IconProceso} alt="" />
              </div>
            </div>
          </div>
          <div className="container-card-reporte col-6">
            <img className="img-numero4" src={numero4} alt="" />
            <div className="container-info">
              <div className="container-text">
                <h2>Reporte Final</h2>
                <p>
                  El informe final consta de un resumen detallado del proceso de
                  auditoría enlazado al contrato inteligente en un documento
                  PDF.
                </p>
              </div>
              <div className="container-img">
                <img src={IconConocimiento} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-center">
          <div className="container-img-center">
            <img src={circuloCentro} alt="" />
          </div>
          <h1>Procesos de una auditoría</h1>
        </div>
      </div>
    </div>
  );
};

export default ProcesoAudiencia;

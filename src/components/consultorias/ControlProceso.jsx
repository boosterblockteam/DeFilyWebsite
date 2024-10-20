import React from "react";

const ControlProceso = ({
  controlProcesoArray,
  tokenizacion,
  pasarelaPagos,
  contratosInteligentes,
  marketingBlockchain,
  buttonSelect,
}) => {
  const { title1, description1, image1 } = controlProcesoArray;
  const { title2, description2, image2 } = tokenizacion;
  const { title3, description3, image3 } = pasarelaPagos;
  const { title4, description4, image4 } = contratosInteligentes;
  const { title5, description5, image5 } = marketingBlockchain;
  console.log({ title1, title2, title3 });

  return (
    <div className="component-controlProceso">
      <div className="container-info">
        <h1
          className={`title ${
            buttonSelect === "Control de proceso"
              ? "title"
              : buttonSelect === "Tokenización de activos"
              ? "--tokenizacionColor"
              : buttonSelect === "Pasarela de pagos"
              ? "--pasarelasColor"
              : buttonSelect === "Contratos inteligentes"
              ? "--contratosColor"
              : "--marketingColor"
          }`}
        >{`${
          buttonSelect === "Control de proceso"
            ? title1
            : buttonSelect === "Tokenización de activos"
            ? title2
            : buttonSelect === "Pasarela de pagos"
            ? title3
            : buttonSelect === "Contratos inteligentes"
            ? title4
            : title5
        }`}</h1>
        <p className="text">
          {`${
            buttonSelect === "Control de proceso"
              ? description1
              : buttonSelect === "Tokenización de activos"
              ? description2
              : buttonSelect === "Pasarela de pagos"
              ? description3
              : buttonSelect === "Contratos inteligentes"
              ? description4
              : description5
          }`}
        </p>
      </div>
      <div className="container-img">
        <img
          src={`${
            buttonSelect === "Control de proceso"
              ? image1
              : buttonSelect === "Tokenización de activos"
              ? image2
              : buttonSelect === "Pasarela de pagos"
              ? image3
              : buttonSelect === "Contratos inteligentes"
              ? image4
              : image5
          }`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ControlProceso;

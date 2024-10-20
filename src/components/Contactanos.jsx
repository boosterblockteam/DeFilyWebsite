import React from "react";
import emailImg from "../assets/img/Email-contactos.png";
import correoImg from "../assets/svg/mailContactos.svg";
import telefonoImg from "../assets/svg/callContactos.svg";

const Contactanos = () => {
  const dataContacto = [
    {
      image: correoImg,
      info: "contac@example.com",
    },
    {
      image: telefonoImg,
      info: "+000 123456789",
    },
  ];

  return (
    <div className="component-contactanos">
      <div className="container-img">
        <div className="container-text">
          <h2>¡Estamos ansiosos por escucharte!</h2>
          <p>
            Si deseas obtener más información sobre nuestros servicios o tienes
            alguna pregunta, no dudes en comunicarte con nosotros.
          </p>
        </div>

        <img src={emailImg} alt="" />
      </div>
      <div className="container-info">
        <h1>
          Puedes completar el formulario de contacto en nuestro sitio web.
        </h1>
        <p>Un miembro de nuestro equipo te responderá lo antes posible.</p>

        <div className="container-datos-contacto">
          {dataContacto.map((data, index) => {
            return (
              <div className={`container-img-data`} key={index}>
                <img src={data.image} alt="" />
                <span>{data.info}</span>
              </div>
            );
          })}
        </div>

        <div className="container-form">
          <div className="container-input-up">
            <input type="text" className="name" placeholder="Nombres" />
            <input type="text" className="lastname" placeholder="Apellidos" />
          </div>
          <div className="container-input-down">
            <input type="number" className="phone" placeholder="Teléfono" />
            <input type="email" className="email" placeholder="Email" />
          </div>
          <div className="container-textarea">
            <textarea className="textArea" placeholder="Mensaje"></textarea>
            <div className="description">Max. 2000 characters</div>
          </div>
          <div className="container-button">
            <button>Enviar Mensaje </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;

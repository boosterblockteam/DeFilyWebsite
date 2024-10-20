import React from "react";
import logo from "../assets/svg/Logo.svg";
import ButtonServices from "./ButtonServices";
import ContainerLanguage from "./ContainerLanguage";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="component-navbar">
      <div className="container-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="container-list">
        <Link to="/">
          <p>Inicio</p>
        </Link>
        <ButtonServices />
        <ContainerLanguage />
      </div>
    </div>
  );
};

export default Navbar;

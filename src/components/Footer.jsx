import React from "react";
import LogoFooter from "../assets/svg/Logoverticalred.svg";
import faceIcon from "../assets/svg/facebook.svg";
import instaIcon from "../assets/svg/instagram.svg";
import twitterIcon from "../assets/svg/twitter.svg";
import discordIcon from "../assets/svg/discord.svg";
import gitIcon from "../assets/svg/github.svg";

const Footer = () => {
  return (
    <div className="component-footer">
      <div className="container-up row">
        <div className="container-logo col-3">
          <img src={LogoFooter} alt="logo" />
        </div>
        <div className="container-enlaces col-3">
        
        </div>
        <div className="container-contact col-3">
          <h5>Contacto</h5>
          <p>info@boosterblock.io</p>
          <p>+52 56 4424 6037</p>
        </div>
        <div className="container-redes-sociales col-3">
        
      
        </div>
      </div>
      <div className="container-down">
        <p>Copyright © 2023 BoosterBlock</p>
      </div>
    </div>
  );
};

export default Footer;

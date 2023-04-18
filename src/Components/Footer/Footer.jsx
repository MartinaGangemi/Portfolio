import React from "react";
import "./../../css/style.scss";

const Footer = () => {
  return (
    <footer className="row justify-content-between mt-5 py-5 text-uppercase footer">
      <div className="col-12 col-sm">© Copyright 2023</div>
      <div className="col-12 col-sm">
        Sviluppato da <span className="color-text">Martina Gangemi</span>
      </div>
    </footer>
  );
};

export default Footer;

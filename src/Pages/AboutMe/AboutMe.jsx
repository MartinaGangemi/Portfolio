import React from "react";

import "./../../css/style.scss";

const AboutMe = () => {
  return (
    <div className="about-container flex-column" id="about">
      <h1 className="text-center text-uppercase">About me</h1>
      <h6 className="text-center">
        <span className="color-text text-uppercase">My </span>{" "}
        <span className="coursive-text">intro</span>{" "}
      </h6>
      <div className="row justify-content-center align-items-center">
        <div className=" col-sm-12 col-lg-6 pe-sm-5 ">
          <p className="pt-4">
            Dopo aver lavorato diversi anni nel settore della ristorazione, ho
            deciso che i tempi erano maturi per cambiare la mia vita e trovare
            un lavoro più affine ai miei interessi. Ho cominciato a studiare
            programmazione nel mio tempo libero, decidendo successivamente di
            frequentare un corso dedicato. Durante il corso ho scoperto la mia
            inclinazione verso la programmazione Front End; è il settore che mi
            permette di esprimere al meglio la mia creatività.
          </p>
        </div>
        <div className="profile-img col-sm-12 col-lg-6">
          <img
            className="img-fluid rounded-circle"
            src="../../../public/img/about.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

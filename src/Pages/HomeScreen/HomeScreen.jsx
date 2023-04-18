import React from "react";

import "./home.scss";
import "./../../css/style.scss";

const HomeScreen = () => {
  return (
    <div className="home-container row" id="home">
      <div className=" col-sm-12 col-lg-8 pe-sm-5 ">
        <h6 className="text-uppercase">
          Hello, <span className="color-text">my name is</span>{" "}
        </h6>
        <h1 className="name font-bold text-uppercase ">
          {" "}
          <span className="color-text ">Martina</span> Gangemi
        </h1>
        <h6>
          {" "}
          <span className="text-uppercase">i am</span>{" "}
          <span className="coursive-text">Front End Developer</span>
        </h6>
      </div>
      <div className="profile-img col-sm-12 col-lg-4">
        <img
          className="img-fluid rounded-circle"
          src="../../../public/img/home.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeScreen;

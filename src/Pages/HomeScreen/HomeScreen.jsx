import React from "react";

import "./home.scss";
import "./../../css/style.scss";

const HomeScreen = () => {
  return (
    <div className="home-container row " id="home">
      <div className=" col-sm-12 col-lg-6 p-4 ">
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
        <p className="pt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nisi
          nesciunt temporibus, maxime sapiente magni neque praesentium ratione
          exercitationem doloribus.
        </p>
      </div>
      <div className="profile-img col-sm-12 col-lg-6">
        <img
          className="img-fluid rounded-circle"
          src="https://www.tradeinn.com/f/13921/139215298/pusheen-canvas-30x30-cm-the-cat-rainbow.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeScreen;

import React from "react";

import "./card.scss";
const Card = ({ work }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 p-2 ">
      <div className="card">
        <div className="img-card-container p-3">
          <img className="rounded" src={"img/" + work.img} alt="..."></img>
        </div>

        <div className="card-body p-3 d-flex justify-content-between flex-column">
          <div>
            <h5 className="card-title">{work.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted ">
              {work.tecnologies.map((el, i) => {
                return i == work.tecnologies.length - 1 ? el + "." : el + ", ";
              })}
            </h6>
            <p className="card-text">{work.description}</p>
          </div>

          <a
            className="link-demo d-flex justify-content-end "
            href={work.link}
            target="_blank"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

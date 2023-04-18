import { React, useState } from "react";

import "./categorieslist.scss";

const CategoriesList = ({ categoriesList, filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="d-flex my-5 text-uppercase justify-content-around">
      {categoriesList.map((category, i) => (
        <button
          key={i}
          className={`categories-btn btn btn-link text-uppercase ${
            active === i ? "active-list" : ""
          }`}
          onClick={() => {
            setActive(i);
            filterItems(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoriesList;

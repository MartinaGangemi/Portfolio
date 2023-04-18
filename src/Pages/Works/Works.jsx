import React, { useEffect, useState } from "react";

import Card from "../../Components/Card";
import CategoriesList from "../../Components/CategoriesList";

import ReactPaginate from "react-paginate";

import { categoriesList } from "../../data/categoriesList";
import { works } from "../../data/works";

import "./works.scss";
const Works = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [workItems, setWorkItems] = useState(works);

  const cardsPerPage = 8;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayCards = workItems
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((work, i) => <Card key={i} work={work}></Card>);

  const pageCount = Math.ceil(workItems.length / cardsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const filterItems = (category) => {
    setPageNumber(0);
    if (category !== "All") {
      const filteredWork = works.filter((work, i) =>
        work.tecnologies.includes(category)
      );
      setWorkItems(filteredWork);
    } else return setWorkItems(works);
  };

  return (
    <div id="works" className="works-container">
      <h1 className="text-center text-uppercase">Recent Works</h1>
      <h6 className="text-center">
        <span className="color-text text-uppercase">My </span>{" "}
        <span className="coursive-text">Portfolio</span>{" "}
      </h6>
      <div>
        <CategoriesList
          categoriesList={categoriesList}
          filterItems={filterItems}
        ></CategoriesList>
      </div>

      <div className="row my-5 card-container">{displayCards}</div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        containerClassName="pagination-btn"
        nextLinkClassName="next-btn"
        previousLinkClassName="prev-btn"
        forcePage={pageCount}
        activeClassName="pagination-active"
      />
    </div>
  );
};

export default Works;

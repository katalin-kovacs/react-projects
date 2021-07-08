import React from "react";

const Categories = ({ category, clicked }) => {
  return (
    <div className="btn-container">
      <button type="button" className="filter-btn" onClick={clicked}>
        {category}
      </button>
    </div>
  );
};

export default Categories;

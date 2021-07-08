import React, { useState } from "react";

const Tour = ({ name, info = "", image, price, removeTourHandler }) => {
  const [showMore, setShowMore] = useState(false);
  console.log(typeof info);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>
          {showMore ? info : info.substring(0, 200) + "..."}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "show less" : " show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTourHandler()}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

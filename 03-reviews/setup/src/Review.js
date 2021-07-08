import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const prevPersonHandler = () => {
    setIndex((index - 1 + people.length) % people.length);
  };

  const nextPersonHandler = () => {
    setIndex((index + 1) % people.length);
  };

  const rndPersonHandler = () => {
    let rnd = Math.floor(Math.random() * people.length);
    if (rnd === index) {
      rnd = (rnd + 1) % people.length;
    }
    setIndex(rnd);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img
          className="person-img"
          src={people[index].image}
          alt={people[index].name}
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[index].name}</h4>
      <p className="job">{people[index].job}</p>
      <p className="info">{people[index].text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPersonHandler}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPersonHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={rndPersonHandler}>
        surprise me
      </button>
    </article>
  );
};

export default Review;

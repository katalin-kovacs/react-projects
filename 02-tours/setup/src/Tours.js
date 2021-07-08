import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTourHandler }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          removeTourHandler={() => removeTourHandler(tour.id)}
        />
      ))}
    </div>
  );
};

export default Tours;

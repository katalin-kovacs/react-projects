import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    setLoading(true);
    const fetchedTours = await fetch(url);
    const parsedTours = await fetchedTours.json();
    setLoading(false);
    setTours(parsedTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTourHandler = (tourID) => {
    const newTours = tours.filter((tour) => tour.id !== tourID);
    setTours(newTours);
  };

  let main = loading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <Tours tours={tours} removeTourHandler={removeTourHandler} />
    </React.Fragment>
  );

  if (!loading && tours.length === 0) {
    main = (
      <div className="title">
        <h2> no tours left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <section>{main}</section>
    </main>
  );
}

export default App;

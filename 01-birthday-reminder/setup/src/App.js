import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  const clearAllHandler = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => (
          <List image={person.image} name={person.name} age={person.age} />
        ))}
        <button onClick={() => clearAllHandler()}>Clear all</button>
      </section>
    </main>
  );
}

export default App;

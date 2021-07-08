import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const uniqueCategories = [...new Set(items.map((item) => item.category))];
  uniqueCategories.unshift("All");
  const [categories] = useState(uniqueCategories);

  const [menuItems, setMenuItems] = useState(items);

  const showCategoriesHandler = (category) => {
    let newMenuItems = items;
    if (category !== "All") {
      newMenuItems = newMenuItems.filter((item) => item.category === category);
    }
    setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((category) => (
            <Categories
              key={category.id}
              category={category}
              clicked={() => showCategoriesHandler(category)}
            />
          ))}
        </div>

        <div className="section-center">
          {menuItems.map((menuItem) => (
            <Menu
              key={menuItem.id}
              img={menuItem.img}
              title={menuItem.title}
              price={menuItem.price}
              desc={menuItem.desc}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

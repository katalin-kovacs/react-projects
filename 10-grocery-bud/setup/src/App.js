import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("groceryList");
  if (list) {
    return JSON.parse(localStorage.getItem("groceryList"));
  } else {
    return [];
  }
};

function App() {
  const [listItemName, setListItemName] = useState("");
  const [groceryList, setGroceryList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [groceryList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!listItemName) {
      showAlert(true, "danger", "please enter a value");
    } else if (listItemName && isEditing) {
      setGroceryList(
        groceryList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: listItemName };
          }
          return item;
        })
      );
      setListItemName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: listItemName,
      };
      setGroceryList([...groceryList, newItem]);
      setListItemName("");
    }
  };

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show: show, type, message });
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setGroceryList(groceryList.filter((item) => item.id !== id));
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setGroceryList([]);
  };

  const editItem = (id) => {
    const specificItem = groceryList.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setListItemName(specificItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} groceryList={groceryList} />
        )}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={listItemName}
            onChange={(event) => setListItemName(event.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {groceryList.length > 0 && (
        <div className="grocery-container">
          <List
            items={groceryList}
            removeItem={removeItem}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  const handleclick = (text) => {
    setItems((prevItems) => {
      return [...prevItems, text];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={handleclick} />
      <div>
        <ul>
          {items.map((singleItem, index) => (
            // as the map function returns an array we can use return here
            <ToDoItem
              key={index}
              id={index}
              itemName={singleItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

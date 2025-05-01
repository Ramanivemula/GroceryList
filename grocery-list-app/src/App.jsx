import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() && quantity.trim()) {
      setList([...list, { name: item, qty: quantity }]);
      setItem("");
      setQuantity("");
    }
  };

  return (
    <div className="container">
      <h1>🛒 Grocery List</h1>
      <div className="input-group">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Item Name"
        />
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          type="number"
          min="1"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul className="list">
        {list.map((grocery, index) => (
          <li key={index}>
            <span>{grocery.name}</span> <span>x {grocery.qty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

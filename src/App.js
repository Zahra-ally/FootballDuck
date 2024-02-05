import React, { useState } from "react";
import "./App.css";

const shirtsData = [
  {
    id: 1,
    category: "La Liga",
    description: "23/24 Barcelona Home Final Player Version",
    price: "50NZD",
    image: "barca1.png",
  },
  {
    id: 2,
    category: "La Liga",
    description: "23/24 Barcelona Third 1:1 Quality Women ",
    price: "50NZD",
    image: "barca2.png",
  },
  {
    id: 3,
    category: "La Liga",
    description: "2014/2015 Barcelona Home 1:1 Kids Retro",
    price: "55NZD",
    image: "barca3.png",
  },
  // Add more shirts with different categories and descriptions
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredShirts, setFilteredShirts] = useState(shirtsData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = shirtsData.filter(
      (shirt) =>
        shirt.description.toLowerCase().includes(term) ||
        shirt.category.toLowerCase().includes(term)
    );
    setFilteredShirts(filtered);
  };

  return (
    <div className="App">
      <img width="50" height="60" src={`images/logoDuc.png`} />

      <h1>Football Duck</h1>

      <input
        type="text"
        placeholder="Search for a shirt..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="shirt-container">
        {filteredShirts.map((shirt) => (
          <div key={shirt.id} className="shirt-card">
            <img src={`images/${shirt.image}`} alt={shirt.description} />
            <p>{shirt.description}</p>
            <p>{shirt.category}</p>
            <br />
            <p className="price">{shirt.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

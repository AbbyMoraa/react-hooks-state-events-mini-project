import React, { useState } from "react";

function CategoryFilter({ categories, onSelectCategory }) {
  const [selected, setSelected] = useState("All");

  const handleClick = (category) => {
    setSelected(category);
    onSelectCategory(category);
  };

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;


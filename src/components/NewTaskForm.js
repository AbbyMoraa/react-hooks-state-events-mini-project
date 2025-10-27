import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText(""); // clear input after submit
    setCategory(categories[0]); // reset category
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-task-text">Details</label>
      <input
        type="text"
        id="new-task-text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="new-task-category">Category</label>
      <select
        id="new-task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;


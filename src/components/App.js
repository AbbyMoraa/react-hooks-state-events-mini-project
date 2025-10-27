import React, { useState } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import { TASKS, CATEGORIES } from "./data"; // your TASKS and CATEGORIES constants

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add new task
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Delete a task by index
  const handleDeleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  // Handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Filter tasks based on selected category
  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((c) => c !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;

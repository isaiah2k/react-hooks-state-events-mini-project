import React, { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import NewTaskForm from "./NewTaskForm"
import TaskList from "./TaskList"

import { CATEGORIES, TASKS } from "../data"

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.text !== taskToDelete))
  }

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const filteredTasks = tasks.filter((task) =>
    selectedCategory === "All" ? true : task.category === selectedCategory
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default App
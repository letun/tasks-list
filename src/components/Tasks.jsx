import React from "react";
import TaskItem from "./TaskItem"

const getTasks = () =>
  Array.from({ length: 10 }, (_, i) => ({
    id: i,
    text: `Task ${i + 1}`,
    completed: false,
  }));

export default function Tasks() {
    const tasks = getTasks();

  return (
    <div>
      <h1>Task List</h1>

      <input type="text" />
      <button>
        Add Task
      </button>
      <ul>
        {tasks.map((v) => <TaskItem task={v} key={v.id} toggleTask={() => {}} deleteTask={() => {}} />)}
      </ul>
    </div>
  );
}
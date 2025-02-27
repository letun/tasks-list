import React from "react";
import { useState } from "react";

import TaskItem from "./TaskItem";

const getTasks = () =>
    Array.from({ length: 10 }, (_, i) => ({
        id: i,
        text: `Task ${i + 1}`,
        completed: false,
    }));

function getMaxTaskId(tasks = []) {
    return getTasks().reduce( (acc, v) => Math.max(acc, v.id), -1 ) + 1;
}

export default function Tasks() {
    const [title, setTitle] = useState('');
    const [tasks, setTasks] = useState(getTasks());
    const [lastTaskId, setlastTaskId] = useState(getMaxTaskId(tasks));

    function handleAddTask() {
        if (title) {
            setlastTaskId((id) => ++id);
            setTasks( (tasks) => [...tasks, {
                    id: lastTaskId,
                    text: title,
                    completed: false,
                }]
            );
            setTitle('');
        }
    }

    function handleDeleteTask(id) {
        setTasks( (tasks) => tasks.filter((v) => v.id !== id) );
    }

    function handleToggleTask(id) {
        setTasks( (tasks) => tasks.map((v) => (v.id === id) ?
         {...v, completed: !v.completed }
         : v) );
    }

  return (
    <div>
      <h1>Task List</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAddTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((v) => <TaskItem task={v} key={v.id} toggleTask={handleToggleTask} deleteTask={handleDeleteTask} />)}
      </ul>
    </div>
  );
}
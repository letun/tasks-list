export default function TaskItem({ task, toggleTask, deleteTask }) {
    return (
      <li
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {task.text}
        <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>
          Delete
        </button>
      </li>
    );
};
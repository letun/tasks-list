export default function TaskItem({ task, toggleTask, deleteTask }) {
    return (
      <li style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <span onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}>{task.text}</span>
        <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>
          Delete
        </button>
      </li>
    );
};
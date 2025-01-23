const TaskList = ({ tasks }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <li key={task.id} className={`task-item ${task.status}`}>
        <strong>{task.description}</strong> - {task.responsible} 
        <span className="status">({task.status})</span>
        <br />
        <small>Computer: {task.computer}</small>
      </li>
    ))}
  </ul>
);

export default TaskList;
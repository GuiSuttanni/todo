const TaskList = ({ tasks }) => (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.description}</strong> - {task.responsible} ({task.status})
          <br />
          <small>Computer: {task.computer}</small>
        </li>
      ))}
    </ul>
  );
  
  export default TaskList;  
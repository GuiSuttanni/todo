import { useState } from 'react';
import { insertTasks } from '../../api/taskApi';

const TaskForm = ({ reloadTasks }) => {
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [status, setStatus] = useState('todo');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertTasks([{ description, responsible, status }]);
    reloadTasks();
    setDescription('');
    setResponsible('');
    setStatus('todo');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Responsible"
        value={responsible}
        onChange={(e) => setResponsible(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
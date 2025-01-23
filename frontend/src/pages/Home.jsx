import { useTasks } from '../hooks/useTasks';
import TaskList from '../components/Task/TaskList';
import TaskForm from '../components/Task/TaskForm';

const Home = () => {
  const { tasks, loading, reloadTasks } = useTasks();

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm reloadTasks={reloadTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;
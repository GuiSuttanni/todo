import { useState, useEffect } from 'react';
import { fetchTasks } from '../api/taskApi';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    setLoading(true);
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return { tasks, loading, reloadTasks: loadTasks };
};
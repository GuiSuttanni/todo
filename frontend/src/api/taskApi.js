const BASE_URL = 'http://localhost:8085';

export const fetchTasks = async () => {
  const response = await fetch(`${BASE_URL}/get-tasks`);
  return response.json();
};

export const insertTasks = async (tasks) => {
  const response = await fetch(`${BASE_URL}/insert-tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tasks),
  });
  return response.json();
};
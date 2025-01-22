const { insertTasks, getTasks } = require('../services/taskService');

const addTasks = async (req, res) => {
  try {
    await insertTasks(req.body);
    res.status(200).send({ message: 'Tasks inserted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const fetchTasks = async (req, res) => {
  try {
    const tasks = await getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { addTasks, fetchTasks };
const express = require('express');
const { addTasks, fetchTasks } = require('../controllers/taskController');

const router = express.Router();

router.post('/insert-tasks', addTasks);
router.get('/get-tasks', fetchTasks);

module.exports = router;
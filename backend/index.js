const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', taskRoutes);

const PORT = 8085;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
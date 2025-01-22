const request = require('supertest');
const express = require('express');
const taskRoutes = require('../routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/', taskRoutes);

describe('Task API', () => {
  test('POST /insert-tasks - should insert tasks', async () => {
    const response = await request(app)
      .post('/insert-tasks')
      .send([{ description: 'Test Task', responsible: 'Test User', status: 'todo' }]);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Tasks inserted successfully');
  });

  test('GET /get-tasks - should retrieve tasks', async () => {
    const response = await request(app).get('/get-tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
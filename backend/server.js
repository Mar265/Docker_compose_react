// Plik: backend/server.js
const express = require('express');
const app = express();
const port = 5000;

// Endpoint na ścieżce głównej
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Endpoint na ścieżce /api
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});

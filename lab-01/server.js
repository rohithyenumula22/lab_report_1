const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
  });
  next();
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Lab 1 Node.js and Express Server');
});

app.get('/about', (req, res) => {
  res.status(200).json({
    name: "Yenumula Venkata Rohith",
    section: "CSE - 2E (211)"
  });
});

app.get('/time', (req, res) => {
  res.status(200).json({
    currentTime: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', timeZoneName: 'short' })
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

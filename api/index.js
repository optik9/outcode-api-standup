const express = require('express');
const cors = require('cors');
const standupRoutes = require('../src/routes/standupRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', standupRoutes);

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error'
  });
});

// Necesario para Vercel
module.exports = app;
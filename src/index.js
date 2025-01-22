const express = require('express');
const cors = require('cors');
const standupRoutes = require('./routes/standupRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Log temporal para verificar las variables de entorno
console.log('Database Config:', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', standupRoutes);

// Manejo de errores global xoxo
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//https://outcode-api-standup-mx75haiz8-choyoss-gmailcoms-projects.vercel.app/api/standups?startDate=2025-01-17&endDate=2025-01-17&location=Peru
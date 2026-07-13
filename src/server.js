const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Static files
app.use(express.static('public'));

// Routes
app.use('/api/quiz', require('./routes/quiz'));
app.use('/api/results', require('./routes/results'));
app.use('/api/certificate', require('./routes/certificate'));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📅 Link expiration: ${process.env.QUIZ_LINK_EXPIRATION_DAYS} days`);
  console.log(`👥 Max concurrent users: ${process.env.MAX_CONCURRENT_USERS}`);
});
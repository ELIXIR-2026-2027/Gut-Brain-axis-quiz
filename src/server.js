const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Security middleware
app.use(helmet());

// Compression middleware - HUGE performance boost
app.use(compression());

// Standard middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(morgan('combined'));

// Cache headers for static files
app.use((req, res, next) => {
  if (req.url.includes('.css') || req.url.includes('.js') || req.url.includes('.svg') || req.url.includes('.png')) {
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (req.url.includes('.html')) {
    res.set('Cache-Control', 'public, max-age=3600');
  } else {
    res.set('Cache-Control', 'public, max-age=60');
  }
  next();
});

// Static files with caching
app.use(express.static('public', {
  maxAge: '1d',
  etag: false
}));

// API Routes
app.use('/api/quiz', require('./routes/quiz'));
app.use('/api/results', require('./routes/results'));
app.use('/api/certificate', require('./routes/certificate'));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
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
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📅 Link expiration: ${process.env.QUIZ_LINK_EXPIRATION_DAYS} days`);
  console.log(`👥 Max concurrent users: ${process.env.MAX_CONCURRENT_USERS}`);
  console.log(`⚡ Performance optimizations: Compression + Caching + Helmet enabled`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

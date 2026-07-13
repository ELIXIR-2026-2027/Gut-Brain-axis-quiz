// Performance optimizations
const compression = require('compression');
const helmet = require('helmet');

// Cache headers for static files
const setCache = (req, res, next) => {
  if (req.url.includes('.css') || req.url.includes('.js')) {
    res.set('Cache-Control', 'public, max-age=31536000');
  } else if (req.url.includes('.html')) {
    res.set('Cache-Control', 'public, max-age=3600');
  }
  next();
};

module.exports = {
  compression,
  helmet,
  setCache
};

// Link expiration checker
function isLinkExpired(expiryDate) {
  return new Date() > new Date(expiryDate);
}

// Calculate remaining days
function getRemainingDays(expiryDate) {
  const now = new Date();
  const expiry = new Date(expiryDate);
  const diffTime = expiry - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

// Generate expiry date
function getExpiryDate(days = 21) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
}

module.exports = {
  isLinkExpired,
  getRemainingDays,
  getExpiryDate
};
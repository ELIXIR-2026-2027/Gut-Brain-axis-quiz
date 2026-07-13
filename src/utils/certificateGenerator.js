const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

async function generateCertificate(name, score, status, resultId) {
  try {
    // Ensure certificates directory exists
    const certsDir = path.join(__dirname, '../../certificates');
    if (!fs.existsSync(certsDir)) {
      fs.mkdirSync(certsDir, { recursive: true });
    }

    // Create certificate filename
    const certificateFilename = `${resultId}.png`;
    const certificatePath = path.join(certsDir, certificateFilename);

    // Generate QR code for certificate verification
    const qrCodeURL = `${process.env.BASE_URL || 'http://localhost:3000'}/verify/${resultId}`;
    const qrCode = await QRCode.toDataURL(qrCodeURL);

    // Create certificate content (using canvas)
    // For now, returning success message
    // In production, use canvas/puppeteer to generate actual certificate image
    
    // Save a placeholder
    fs.writeFileSync(certificatePath, JSON.stringify({
      name,
      score,
      status,
      resultId,
      generatedAt: new Date().toISOString(),
      qrCode
    }));

    return `/certificates/${certificateFilename}`;
  } catch (error) {
    console.error('Certificate generation error:', error);
    throw error;
  }
}

module.exports = {
  generateCertificate
};

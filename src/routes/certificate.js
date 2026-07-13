const express = require('express');
const router = express.Router();
const { generateCertificate } = require('../utils/certificateGenerator');

// Generate certificate
router.post('/generate', async (req, res) => {
  try {
    const { name, score, status, resultId } = req.body;

    if (!name || score === undefined || !status || !resultId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const certificatePath = await generateCertificate(name, score, status, resultId);
    
    res.status(200).json({
      success: true,
      certificatePath,
      message: 'Certificate generated successfully'
    });
  } catch (error) {
    console.error('Error generating certificate:', error);
    res.status(500).json({ error: 'Failed to generate certificate' });
  }
});

// Download certificate
router.get('/download/:resultId', (req, res) => {
  try {
    const certificatePath = `./certificates/${req.params.resultId}.png`;
    res.download(certificatePath, 'gut-brain-certificate.png');
  } catch (error) {
    res.status(500).json({ error: 'Failed to download certificate' });
  }
});

module.exports = router;
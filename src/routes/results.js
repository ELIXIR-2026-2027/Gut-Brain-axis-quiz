const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Store results (in production, use database)
const results = new Map();

// Save quiz results
router.post('/save', (req, res) => {
  try {
    const { name, email, answers, totalScore, status } = req.body;

    if (!name || !answers || totalScore === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const resultId = uuidv4();
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + parseInt(process.env.QUIZ_LINK_EXPIRATION_DAYS || 21));

    const result = {
      id: resultId,
      name,
      email,
      answers,
      totalScore,
      status,
      createdAt: new Date(),
      expiryDate,
      certificateGenerated: false
    };

    results.set(resultId, result);

    res.status(200).json({
      success: true,
      resultId,
      expiryDate,
      message: 'Results saved successfully'
    });
  } catch (error) {
    console.error('Error saving results:', error);
    res.status(500).json({ error: 'Failed to save results' });
  }
});

// Get results by ID
router.get('/:resultId', (req, res) => {
  try {
    const result = results.get(req.params.resultId);

    if (!result) {
      return res.status(404).json({ error: 'Results not found' });
    }

    // Check if link has expired
    if (new Date() > result.expiryDate) {
      results.delete(req.params.resultId);
      return res.status(410).json({ error: 'Link has expired' });
    }

    res.status(200).json({
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch results' });
  }
});

// Get results summary for analytics
router.get('/summary/all', (req, res) => {
  try {
    const allResults = Array.from(results.values());
    const totalResponses = allResults.length;
    const averageScore = allResults.reduce((sum, r) => sum + r.totalScore, 0) / totalResponses || 0;

    const statusDistribution = {
      'Excellent': allResults.filter(r => r.status === 'Excellent').length,
      'Good': allResults.filter(r => r.status === 'Good').length,
      'Fair': allResults.filter(r => r.status === 'Fair').length,
      'Needs Improvement': allResults.filter(r => r.status === 'Needs Improvement').length
    };

    res.status(200).json({
      success: true,
      totalResponses,
      averageScore: parseFloat(averageScore.toFixed(2)),
      statusDistribution
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch summary' });
  }
});

module.exports = router;
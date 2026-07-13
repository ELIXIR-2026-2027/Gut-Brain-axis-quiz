const express = require('express');
const router = express.Router();
const questions = require('../data/questions.json');

// Get all quiz questions
router.get('/', (req, res) => {
  try {
    res.status(200).json({
      success: true,
      total: questions.length,
      questions: questions
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// Get specific question
router.get('/:id', (req, res) => {
  try {
    const question = questions.find(q => q.id === parseInt(req.params.id));
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.status(200).json({ success: true, question });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch question' });
  }
});

// Validate answer
router.post('/validate/:id', (req, res) => {
  try {
    const { optionIndex } = req.body;
    const question = questions.find(q => q.id === parseInt(req.params.id));
    
    if (!question) {
      return res.status(404).json({ error: 'Question not found' });
    }

    if (optionIndex < 0 || optionIndex >= question.options.length) {
      return res.status(400).json({ error: 'Invalid option' });
    }

    const selectedOption = question.options[optionIndex];
    res.status(200).json({
      success: true,
      score: selectedOption.score,
      feedback: selectedOption.feedback,
      text: selectedOption.text
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to validate answer' });
  }
});

module.exports = router;
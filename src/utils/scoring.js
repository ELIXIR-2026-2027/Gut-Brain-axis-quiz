// Calculate score and determine health status
function calculateScore(answers) {
  let totalScore = 0;
  answers.forEach(answer => {
    totalScore += answer.score;
  });
  return totalScore;
}

function getHealthStatus(totalScore) {
  if (totalScore >= 97) return 'Excellent';
  if (totalScore >= 65) return 'Good';
  if (totalScore >= 33) return 'Fair';
  return 'Needs Improvement';
}

function getScorePercentage(totalScore) {
  return ((totalScore / 130) * 100).toFixed(1);
}

// Get sorted feedback (lowest scores first - highest priority)
function getSortedFeedback(answers) {
  return answers
    .sort((a, b) => a.score - b.score)
    .map(answer => ({
      questionId: answer.questionId,
      question: answer.question,
      selectedOption: answer.selectedOption,
      score: answer.score,
      feedback: answer.feedback,
      category: answer.category,
      priority: answer.score < 4 ? 'high' : answer.score < 7 ? 'medium' : 'low'
    }));
}

// Generate improvement tips
function getImprovementTips(sortedFeedback) {
  const tips = [];
  
  sortedFeedback.slice(0, 5).forEach(item => {
    if (item.score < 7) {
      tips.push({
        category: item.category,
        priority: item.priority,
        tip: generateTipForCategory(item.category, item.score)
      });
    }
  });

  return tips;
}

function generateTipForCategory(category, score) {
  const tips = {
    'Sleep Time': 'Try to go to bed before 10 PM for better sleep quality',
    'Sleep Duration': 'Aim for 7-9 hours of sleep each night',
    'Vegetables Intake': 'Add at least one extra serving of vegetables to your daily meals',
    'Water Intake': 'Drink an extra glass of water with each meal',
    'Exercise': 'Start with just 20 minutes of daily physical activity',
    'Stress Level': 'Practice 10 minutes of meditation or deep breathing daily',
    'Processed Foods': 'Replace one processed food with a whole food alternative',
    'Fermented Foods': 'Add yogurt or fermented vegetables to one meal daily',
    'Screen Time': 'Reduce screen time by 30 minutes before bedtime',
    'Relaxation': 'Try yoga, meditation, or progressive muscle relaxation',
    'Gut Awareness': 'Keep a journal of your digestive patterns and mood',
    'Mental Health': 'Consider talking to a counselor or practicing positive affirmations',
    'Overall Lifestyle': 'Start with one habit change and build from there'
  };

  return tips[category] || 'Work on improving this aspect of your lifestyle';
}

module.exports = {
  calculateScore,
  getHealthStatus,
  getScorePercentage,
  getSortedFeedback,
  getImprovementTips
};
// Load and display results
function displayResults() {
  const results = JSON.parse(sessionStorage.getItem('quizResults'));
  
  if (!results) {
    window.location.href = '/index.html';
    return;
  }
  
  const { totalScore, status, answers, resultId } = results;
  const percentage = ((totalScore / 130) * 100).toFixed(1);
  
  // Set status badge
  const statusEmoji = {
    'Excellent': '🌟',
    'Good': '✨',
    'Fair': '👍',
    'Needs Improvement': '💪'
  };
  
  document.getElementById('statusBadge').innerHTML = `${statusEmoji[status]} ${status}`;
  document.getElementById('totalScore').textContent = totalScore;
  document.getElementById('scorePercentage').textContent = percentage + '%';
  
  // Display feedback sorted by priority (lowest scores first)
  const sortedAnswers = answers.sort((a, b) => a.score - b.score);
  
  let feedbackHTML = '';
  sortedAnswers.forEach(answer => {
    const priority = answer.score < 4 ? 'high' : answer.score < 7 ? 'medium' : 'low';
    feedbackHTML += `
      <div class="feedback-item">
        <div class="feedback-header">
          <div class="feedback-question">${answer.question}</div>
          <div class="priority-badge priority-${priority}">${priority.toUpperCase()}</div>
        </div>
        <div class="feedback-score">Your Score: ${answer.score}/10</div>
        <div class="feedback-details">
          <strong>Your Answer:</strong> ${answer.selectedOption}<br>
          <strong>Feedback:</strong> ${answer.feedback}
        </div>
      </div>
    `;
  });
  
  document.getElementById('feedbackList').innerHTML = feedbackHTML;
  
  // Display articles
  loadArticles();
  
  // Generate QR code
  generateQRCode(resultId);
  
  // Set quiz link
  const quizLink = `${window.location.origin}/results.html?id=${resultId}`;
  document.getElementById('quizLink').value = quizLink;
}

function loadArticles() {
  fetch('/api/quiz')
    .then(response => response.json())
    .then(data => {
      // For now, we'll load articles from the data endpoint
      fetch('/src/data/articles.json')
        .then(r => r.json())
        .then(articles => displayArticles(articles))
        .catch(() => {
          // Fallback: show placeholder
          const articlesHTML = `
            <div class="article-card">
              <div class="article-emoji">📚</div>
              <div class="article-title">Gut Microbiome Basics</div>
              <div class="article-subtitle">Understanding your gut bacteria</div>
            </div>
          `;
          document.getElementById('articlesList').innerHTML = articlesHTML;
        });
    });
}

function displayArticles(articles) {
  let html = '';
  articles.forEach(article => {
    html += `
      <div class="article-card">
        <div class="article-emoji">${article.emoji}</div>
        <div class="article-title">${article.title}</div>
        <div class="article-subtitle">${article.subtitle}</div>
      </div>
    `;
  });
  document.getElementById('articlesList').innerHTML = html;
}

function generateQRCode(resultId) {
  const quizLink = `${window.location.origin}/results.html?id=${resultId}`;
  const qrContainer = document.getElementById('qrCode');
  qrContainer.innerHTML = '';
  
  try {
    new QRCode(qrContainer, {
      text: quizLink,
      width: 200,
      height: 200,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
}

function downloadCertificate() {
  const results = JSON.parse(sessionStorage.getItem('quizResults'));
  alert('📜 Certificate download feature coming soon! Your score: ' + results.totalScore + '\n\nStatus: ' + results.status);
}

function copyLink() {
  const linkInput = document.getElementById('quizLink');
  linkInput.select();
  document.execCommand('copy');
  alert('✅ Quiz link copied to clipboard!');
}

function retakeQuiz() {
  sessionStorage.removeItem('quizResults');
  window.location.href = '/quiz.html';
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', displayResults);
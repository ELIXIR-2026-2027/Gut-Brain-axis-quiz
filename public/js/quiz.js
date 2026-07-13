let currentQuestion = 0;
let answers = [];
let questions = [];
let selectedAnswers = {};

const scoreMap = {
  'Sleep Time': 0,
  'Sleep Duration': 0,
  'Vegetables Intake': 0,
  'Water Intake': 0,
  'Exercise': 0,
  'Stress Level': 0,
  'Processed Foods': 0,
  'Fermented Foods': 0,
  'Screen Time': 0,
  'Relaxation': 0,
  'Gut Awareness': 0,
  'Mental Health': 0,
  'Overall Lifestyle': 0
};

// Load questions
async function loadQuestions() {
  try {
    const response = await fetch('/api/quiz');
    const data = await response.json();
    questions = data.questions;
    displayQuestion();
  } catch (error) {
    console.error('Error loading questions:', error);
  }
}

function displayQuestion() {
  const question = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  
  document.getElementById('progress').style.width = progressPercent + '%';
  document.getElementById('currentQuestion').textContent = currentQuestion + 1;
  
  let html = `
    <div class="question">
      <h2>${question.question}</h2>
      <div class="options">
  `;
  
  question.options.forEach((option, index) => {
    const id = `option_${currentQuestion}_${index}`;
    const isSelected = selectedAnswers[currentQuestion] === index ? 'checked' : '';
    html += `
      <div class="option">
        <input type="radio" id="${id}" name="question_${currentQuestion}" value="${index}" ${isSelected}>
        <label for="${id}">${option.text}</label>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
  `;
  
  document.getElementById('quizForm').innerHTML = html;
  
  // Update button visibility
  document.getElementById('prevBtn').style.display = currentQuestion > 0 ? 'block' : 'none';
  document.getElementById('nextBtn').textContent = currentQuestion === questions.length - 1 ? 'Submit →' : 'Next →';
}

function nextQuestion() {
  const selected = document.querySelector(`input[name="question_${currentQuestion}"]:checked`);
  
  if (!selected) {
    alert('Please select an option before proceeding.');
    return;
  }
  
  const optionIndex = parseInt(selected.value);
  selectedAnswers[currentQuestion] = optionIndex;
  
  if (currentQuestion === questions.length - 1) {
    submitQuiz();
  } else {
    currentQuestion++;
    displayQuestion();
  }
}

function previousQuestion() {
  const selected = document.querySelector(`input[name="question_${currentQuestion}"]:checked`);
  if (selected) {
    selectedAnswers[currentQuestion] = parseInt(selected.value);
  }
  currentQuestion--;
  displayQuestion();
}

async function submitQuiz() {
  const selected = document.querySelector(`input[name="question_${currentQuestion}"]:checked`);
  if (selected) {
    selectedAnswers[currentQuestion] = parseInt(selected.value);
  }
  
  // Calculate total score
  let totalScore = 0;
  const answerDetails = [];
  
  questions.forEach((question, index) => {
    const optionIndex = selectedAnswers[index];
    const option = question.options[optionIndex];
    totalScore += option.score;
    
    answerDetails.push({
      questionId: question.id,
      question: question.question,
      category: question.category,
      selectedOption: option.text,
      score: option.score,
      feedback: option.feedback
    });
  });
  
  // Determine health status
  let status = 'Needs Improvement';
  if (totalScore >= 97) status = 'Excellent';
  else if (totalScore >= 65) status = 'Good';
  else if (totalScore >= 33) status = 'Fair';
  
  // Save results
  try {
    const response = await fetch('/api/results/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Quiz Participant',
        email: '',
        answers: answerDetails,
        totalScore: totalScore,
        status: status
      })
    });
    
    const data = await response.json();
    
    // Store results in sessionStorage
    sessionStorage.setItem('quizResults', JSON.stringify({
      totalScore: totalScore,
      status: status,
      answers: answerDetails,
      resultId: data.resultId
    }));
    
    // Redirect to results page
    window.location.href = '/results.html';
  } catch (error) {
    console.error('Error submitting quiz:', error);
    alert('Error submitting quiz. Please try again.');
  }
}

// Initialize quiz on page load
window.addEventListener('DOMContentLoaded', loadQuestions);
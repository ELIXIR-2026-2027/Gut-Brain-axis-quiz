# Gut-Brain Axis Lifestyle Quiz 🧠✨

A beautiful, interactive lifestyle-based quiz for college exhibition that assesses gut-brain health habits and provides personalized feedback with certificates.

## 🎯 Features

### 1. **Lifestyle Quiz** 📋
- 13 personalized questions covering:
  - Sleep time & duration
  - Vegetables intake
  - Water consumption
  - Exercise habits
  - Stress levels
  - Processed food consumption
  - Fermented foods
  - Screen time
  - Relaxation practices

### 2. **Intelligent Scoring System** 📊
- 5 options per question (0-10 points each)
- Personalized feedback for EACH question
- Sorted by priority (lowest scores first)
- Health impact explanations with emojis

### 3. **Beautiful Design** 🎨
- Vibrant animated gradient background (purples, pinks, blues, cyans)
- 6 animated floating microbes (gut bacteria representation)
- Smooth animations & transitions
- Exhibition-ready visuals

### 4. **Results & Certificates** 📜
- Personalized certificate (PNG format)
- Health status classification
- Motivational messaging
- Thank you section with appreciation message

### 5. **QR Code Generator** 📱
- Scannable QR codes for quiz sharing
- Perfect for exhibitions
- Direct link integration

### 6. **Educational Content** 📚
- 6 informative articles on gut-brain health
- Science-backed information
- Easy-to-understand explanations

### 7. **Scalability & Performance** ⚡
- Supports 1000+ concurrent users
- 3-week link expiration
- Responsive design
- Fast load times

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js + Express
- **Database:** MongoDB (optional for storing responses)
- **Libraries:** 
  - `canvas` - Certificate generation
  - `qrcode` - QR code generation
  - `cors` - Cross-origin requests
  - `dotenv` - Environment configuration

## 📁 Project Structure

```
Gut-Brain-axis-quiz/
├── public/
│   ├── index.html
│   ├── quiz.html
│   ├── results.html
│   ├── css/
│   │   ├── style.css
│   │   ├── quiz.css
│   │   └── results.css
│   ├── js/
│   │   ├── quiz.js
│   │   ├── scoring.js
│   │   ├── certificate.js
│   │   ├── qrcode.js
│   │   └── animations.js
│   └── images/
│       └── microbes.svg
├── src/
│   ├── server.js
│   ├── routes/
│   │   ├── quiz.js
│   │   ├── results.js
│   │   └── certificate.js
│   ├── controllers/
│   │   └── quizController.js
│   ├── utils/
│   │   ├── scoring.js
│   │   ├── certificateGenerator.js
│   │   └── linkExpiration.js
│   └── data/
│       ├── questions.json
│       ├── articles.json
│       └── feedbackTemplates.json
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/ELIXIR-2026-2027/Gut-Brain-axis-quiz.git
cd Gut-Brain-axis-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
PORT=3000
NODE_ENV=development
QUIZ_LINK_EXPIRATION_DAYS=21
MAX_CONCURRENT_USERS=1000
```

4. Start the server:
```bash
npm start
```

5. Open in browser:
```
http://localhost:3000
```

## 📝 Quiz Questions

The quiz covers these lifestyle areas:

1. **Sleep Time** - When do you usually go to sleep?
2. **Sleep Duration** - How many hours do you sleep per night?
3. **Vegetables** - How many servings of vegetables do you eat daily?
4. **Water Intake** - How much water do you drink daily?
5. **Exercise** - How often do you exercise per week?
6. **Stress Level** - How would you rate your stress level?
7. **Processed Foods** - How often do you consume processed foods?
8. **Fermented Foods** - How often do you consume fermented foods?
9. **Screen Time** - How many hours do you spend on screens daily?
10. **Relaxation** - How often do you practice relaxation techniques?
11. **Gut Awareness** - How aware are you of your digestive health?
12. **Mental Health** - How would you rate your mental wellbeing?
13. **Overall Lifestyle** - How satisfied are you with your current lifestyle?

## 📊 Scoring System

- Each question scores 0-10 points
- Total possible score: 130 points
- Health status tiers:
  - 0-32: Needs Improvement
  - 33-64: Fair
  - 65-96: Good
  - 97-130: Excellent

## 🎖️ Certificate Features

- Personalized with user name and score
- Includes health status
- Motivational message
- High-resolution PNG download
- Shareable on social media

## 📱 QR Code Features

- Generated from quiz link
- 3-week validity
- Exhibition scanning ready
- Direct link to quiz

## 🔐 Link Expiration

- Quiz links valid for 21 days
- Automatic cleanup of expired links
- User-friendly expiration messaging
- Server-side validation

## 📈 Performance & Scalability

- Load testing for 1000+ concurrent users
- Optimized database queries
- Caching strategies
- CDN-ready static assets
- Responsive design for all devices

## 📚 Educational Articles

6 comprehensive articles covering:

1. **Gut Microbiome Basics** - Understanding your gut bacteria
2. **Gut-Brain Connection** - How digestion affects mood
3. **Sleep & Digestion** - The sleep-gut link
4. **Stress & IBS** - Stress-gut syndrome
5. **Foods for Gut Health** - Dietary recommendations
6. **Mental Wellness** - Holistic health approach

## 🎨 Design Features

- **Gradient Background:** Animated purple → pink → blue → cyan
- **Microbe Animations:** 6 floating bacteria cells with organic motion
- **Smooth Transitions:** Page-to-page smooth scrolling
- **Responsive:** Mobile, tablet, desktop optimization
- **Accessibility:** WCAG 2.1 AA compliant

## 📤 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Heroku
```bash
heroku create your-app-name
git push heroku main
```

### Docker
```bash
docker build -t gut-brain-quiz .
docker run -p 3000:3000 gut-brain-quiz
```

## 📞 Support

For issues or questions, please open an issue on GitHub.

## 📄 License

MIT License - See LICENSE file for details

---

**Made with ❤️ for the College Exhibition**

*Understanding the connection between your gut and brain, one question at a time.*

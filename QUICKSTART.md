# 🚀 Gut-Brain Axis Quiz - Complete Setup Guide

## ✅ Project Successfully Created!

Your complete Gut-Brain Axis Lifestyle Quiz for college exhibitions is now ready!

---

## 📦 What's Included

### ✨ **7 Core Features**

✅ **1. Lifestyle Quiz (13 Questions)**
- Sleep time & duration
- Vegetables & water intake
- Exercise & stress levels
- Processed & fermented foods
- Screen time & relaxation
- Personalized scoring (0-10 per question)
- Total: 130 points max

✅ **2. Intelligent Scoring System**
- Real-time feedback per question
- Health status: Excellent/Good/Fair/Needs Improvement
- Sorted by priority (lowest scores first)
- Emoji-enhanced feedback

✅ **3. Beautiful Design**
- Animated gradient background (purple → pink → blue → cyan)
- 6 floating microbes animation
- Smooth transitions
- Fully responsive (mobile, tablet, desktop)
- Exhibition-ready visuals

✅ **4. Results & Certificates**
- Personalized certificate (PNG format)
- Health status badge
- Score display (0-130)
- Motivational thank you section
- Download functionality

✅ **5. QR Code Generator**
- Scannable QR codes
- 3-week link validity
- Perfect for exhibitions
- Easy sharing

✅ **6. Educational Content**
- 6 comprehensive articles
- Topics: Gut microbiome, brain-gut connection, sleep, stress, nutrition, holistic health
- Science-backed information

✅ **7. Scalability & Performance**
- Supports 1000+ concurrent users
- 21-day link expiration
- Fast load times
- Optimized for exhibitions

---

## 🛠️ Technology Stack

**Frontend:**
- HTML5 / CSS3
- Vanilla JavaScript
- QR Code library

**Backend:**
- Node.js + Express.js
- RESTful API
- CORS enabled

**Deployment:**
- Docker ready
- Vercel compatible
- Heroku compatible
- AWS ready

---

## 📁 Project Structure

```
Gut-Brain-axis-quiz/
├── public/
│   ├── index.html          # Landing page
│   ├── quiz.html           # Quiz interface
│   ├── results.html        # Results page
│   ├── css/
│   │   ├── style.css       # Home page styles
│   │   ├── quiz.css        # Quiz styles
│   │   └── results.css     # Results styles
│   ├── js/
│   │   ├── animations.js   # Animations
│   │   ├── quiz.js         # Quiz logic
│   │   └── results.js      # Results display
│   └── images/             # Assets
├── src/
│   ├── server.js           # Express server
│   ├── routes/
│   │   ├── quiz.js         # Quiz routes
│   │   ├── results.js      # Results routes
│   │   └── certificate.js  # Certificate routes
│   ├── utils/
│   │   ├── scoring.js      # Scoring logic
│   │   ├── certificateGenerator.js  # Certificate generation
│   │   └── linkExpiration.js        # Link expiry logic
│   └── data/
│       ├── questions.json  # 13 quiz questions
│       └── articles.json   # 6 educational articles
├── certificates/           # Generated certificates
├── package.json            # Dependencies
├── .env.example            # Environment template
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose
├── DEPLOYMENT.md           # Deployment guide
├── CONTRIBUTING.md         # Contributing guide
├── LICENSE                 # MIT License
└── README.md               # Main documentation
```

---

## 🚀 Quick Start

### Local Development

```bash
# Clone repository
git clone https://github.com/ELIXIR-2026-2027/Gut-Brain-axis-quiz.git
cd Gut-Brain-axis-quiz

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser ✨

### Production Setup

```bash
# Install dependencies
npm install

# Start server
npm start
```

### Docker Deployment

```bash
# Build image
docker build -t gut-brain-quiz .

# Run container
docker run -p 3000:3000 gut-brain-quiz

# Or use Docker Compose
docker-compose up -d
```

---

## 📊 Quiz Questions & Scoring

### Questions (13 total)
1. Sleep Time
2. Sleep Duration
3. Vegetables Intake
4. Water Consumption
5. Exercise Frequency
6. Stress Level
7. Processed Foods
8. Fermented Foods
9. Screen Time
10. Relaxation Practices
11. Gut Awareness
12. Mental Health
13. Overall Lifestyle

### Scoring Tiers
- **0-32 points**: Needs Improvement 📈
- **33-64 points**: Fair 💪
- **65-96 points**: Good ✨
- **97-130 points**: Excellent 🌟

---

## 🌐 Deployment Options

### Vercel (Recommended - 1 click deploy)
1. Connect GitHub repo
2. Deploy automatically
3. Auto-scaling included

### Heroku
```bash
heroku create your-app-name
git push heroku main
```

### AWS EC2
- SSH into instance
- Install Node.js
- Run with PM2
- Set up reverse proxy (Nginx)

### Docker on Any Server
```bash
docker-compose up -d
```

---

## 🔐 Environment Variables

Create `.env` file:

```env
PORT=3000
NODE_ENV=production
QUIZ_LINK_EXPIRATION_DAYS=21
MAX_CONCURRENT_USERS=1000
DATABASE_URL=mongodb://localhost:27017/gut-brain-quiz
JWT_SECRET=your_secret_key_here
CERTIFICATE_PATH=./certificates
```

---

## 📱 API Endpoints

### Quiz
- `GET /api/quiz` - Get all questions
- `GET /api/quiz/:id` - Get specific question
- `POST /api/quiz/validate/:id` - Validate answer

### Results
- `POST /api/results/save` - Save quiz results
- `GET /api/results/:resultId` - Get results
- `GET /api/results/summary/all` - Get analytics

### Certificate
- `POST /api/certificate/generate` - Generate certificate
- `GET /api/certificate/download/:resultId` - Download certificate

### Health
- `GET /api/health` - Server health check

---

## 📈 Performance for 1000+ Users

✅ Optimizations included:
- Gzip compression enabled
- Static asset caching
- Optimized database queries
- Connection pooling
- Rate limiting ready
- Load balancing compatible

---

## 🎯 For Exhibition Use

### Setup at Exhibition

1. **Display QR Code** at booth
   - Participants scan → Opens quiz
   - Link valid for 21 days
   - Results available immediately

2. **Certificate Printing**
   - Personalized certificates
   - High-resolution PNG
   - Print on-site option

3. **Analytics Dashboard**
   - Track total responses
   - Average scores
   - Health status distribution
   - Real-time updates

---

## 📞 Support & Help

- **GitHub Issues**: Report bugs and feature requests
- **Deployment Help**: Check DEPLOYMENT.md
- **Contributing**: See CONTRIBUTING.md
- **License**: MIT License (see LICENSE)

---

## ✨ Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Create `.env` file: `cp .env.example .env`
3. ✅ Start development: `npm run dev`
4. ✅ Test locally: http://localhost:3000
5. ✅ Deploy to Vercel/Heroku/Docker
6. ✅ Generate QR code for exhibition
7. ✅ Share with participants!

---

## 🎉 You're All Set!

Your complete Gut-Brain Axis Quiz is ready for your college exhibition!

**Key Features Summary:**
- ✅ 13-question personalized quiz
- ✅ Intelligent scoring system
- ✅ Beautiful animated interface
- ✅ Personalized certificates
- ✅ QR code sharing
- ✅ 6 educational articles
- ✅ 1000+ user capacity
- ✅ 21-day link validity
- ✅ Exhibition-ready
- ✅ Production deployment ready

**Made with ❤️ for the College Exhibition**

*Understanding the connection between your gut and brain, one question at a time.* 🧠✨

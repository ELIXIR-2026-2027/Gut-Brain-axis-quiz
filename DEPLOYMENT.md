# Deployment Guide

## Local Setup

### Prerequisites
- Node.js >= 14.0.0
- npm >= 6.0.0

### Installation

```bash
git clone https://github.com/ELIXIR-2026-2027/Gut-Brain-axis-quiz.git
cd Gut-Brain-axis-quiz
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production

```bash
npm start
```

## Docker Deployment

### Build and Run

```bash
docker build -t gut-brain-quiz .
docker run -p 3000:3000 gut-brain-quiz
```

### Docker Compose

```bash
docker-compose up -d
```

## Cloud Deployment

### Vercel (Recommended)

1. Connect GitHub repository
2. Import project
3. Deploy automatically

```bash
vercel deploy
```

### Heroku

```bash
heroku create your-app-name
git push heroku main
```

### AWS EC2

1. SSH into instance
2. Install Node.js and npm
3. Clone repository
4. Install dependencies
5. Run with PM2:

```bash
npm install -g pm2
pm2 start src/server.js --name "gut-brain-quiz"
pm2 save
pm2 startup
```

## Environment Variables

Create `.env` file:

```
PORT=3000
NODE_ENV=production
QUIZ_LINK_EXPIRATION_DAYS=21
MAX_CONCURRENT_USERS=1000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
CERTIFICATE_PATH=./certificates
```

## Monitoring

### Health Check

```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{"status":"OK","message":"Server is running"}
```

## Performance Optimization

### For 1000+ Users:

1. **Use CDN** for static assets
2. **Enable gzip compression**
3. **Implement caching** for quiz data
4. **Use database** instead of in-memory storage
5. **Load balancing** with multiple instances

## Support

For issues, open an issue on GitHub.

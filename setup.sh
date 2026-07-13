#!/bin/bash

# Gut-Brain Axis Quiz - Setup Script

echo "🧠 Gut-Brain Axis Quiz - Setup"
echo "===============================\n"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)\n"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file
if [ ! -f .env ]; then
    echo "\n📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created (update with your values)"
fi

# Create certificates directory
mkdir -p certificates

echo "\n✅ Setup complete!"
echo "🚀 Start development: npm run dev"
echo "🚀 Start production: npm start"

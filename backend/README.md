# Feedback Dashboard Backend

Express.js API server for Feedback Dashboard.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/feedback-dashboard
```

3. Start server:
```bash
npm run dev  # Development mode with nodemon
npm start    # Production mode
```

## API Endpoints

- `POST /api/feedback` - Create feedback
- `GET /api/feedback` - Get all feedbacks
- `GET /api/stats` - Get analytics stats
- `GET /health` - Health check

## MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas connection string in `.env`.


# Feedback Dashboard

A full-stack Feedback Management Dashboard built for Upteky Solution Pvt. Ltd. SDE Intern Task.

## Features

- ✅ **Feedback Form** with Name, Email, Message, and Rating (1-5)
- ✅ **Feedback Table** displaying all feedbacks with sorting
- ✅ **Analytics Cards** showing:
  - Total feedbacks
  - Average rating
  - Positive feedbacks (rating ≥ 4)
  - Negative feedbacks (rating < 3)
- ✅ **REST API** with validation
- ✅ **MongoDB** database integration
- ✅ **Modern UI** with responsive design

## Tech Stack

### Frontend
- React 18
- Vite
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS enabled

## Project Structure

```
.
├── backend/
│   ├── server.js          # Express server
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/feedback-dashboard
```

For MongoDB Atlas, use:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/feedback-dashboard
```

4. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (optional, defaults to localhost:5000):
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

The frontend will run on `http://localhost:5173`

## API Endpoints

### POST /api/feedback
Create a new feedback entry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great service!",
  "rating": 5
}
```

**Response:**
```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great service!",
  "rating": 5,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/feedback
Get all feedbacks.

**Response:**
```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great service!",
    "rating": 5,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /api/stats
Get analytics statistics.

**Response:**
```json
{
  "total": 10,
  "averageRating": 4.2,
  "positive": 7,
  "negative": 1
}
```

### GET /health
Health check endpoint.

## Deployment

### Backend Deployment (Render/Railway/Cyclic)

1. Push your code to GitHub
2. Connect your repository to Render/Railway/Cyclic
3. Set environment variables:
   - `PORT` (usually auto-set by platform)
   - `MONGODB_URI` (your MongoDB connection string)
4. Deploy!

**Example Render Configuration:**
- Build Command: `cd backend && npm install`
- Start Command: `cd backend && npm start`
- Environment: Node

### Frontend Deployment (Vercel/Netlify)

1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Set build settings:
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/dist`
   - Install Command: `cd frontend && npm install`
4. Set environment variable:
   - `VITE_API_URL` (your backend URL, e.g., `https://your-api.onrender.com`)
5. Deploy!

**Example Vercel Configuration:**
- Framework Preset: Vite
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

### MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user
4. Whitelist IP addresses (0.0.0.0/0 for all IPs in development)
5. Get connection string and use it as `MONGODB_URI`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/feedback-dashboard
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## Validation

- Name: Required, cannot be empty
- Message: Required, cannot be empty
- Rating: Required, must be between 1 and 5
- Email: Optional

## Testing

1. Start backend server
2. Start frontend development server
3. Open `http://localhost:5173`
4. Submit a feedback
5. Verify it appears in the table and analytics update

## Future Enhancements (Optional)

- [ ] Search/filter by rating
- [ ] Export feedbacks to CSV
- [ ] Basic authentication for dashboard
- [ ] Pagination for feedback table
- [ ] Edit/delete feedback functionality
- [ ] Real-time updates using WebSockets

## License

MIT License

## Author

Built for Upteky Solution Pvt. Ltd. SDE Intern Task


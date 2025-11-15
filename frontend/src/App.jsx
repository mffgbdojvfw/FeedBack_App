import { useState, useEffect } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackTable from './components/FeedbackTable'
import AnalyticsCards from './components/AnalyticsCards'
import { getFeedbacks, getStats } from './services/api'
import './App.css'

function App() {
  const [feedbacks, setFeedbacks] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    averageRating: 0,
    positive: 0,
    negative: 0
  })
  const [loading, setLoading] = useState(true)

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'


  const fetchFeedbacks = async () => {
    try {
      const data = await getFeedbacks(API_URL)
      setFeedbacks(data)
    } catch (error) {
      console.error('Error fetching feedbacks:', error)
    }
  }

  const fetchStats = async () => {
    try {
      const data = await getStats(API_URL)
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    }
  }

  const refreshData = async () => {
    setLoading(true)
    await Promise.all([fetchFeedbacks(), fetchStats()])
    setLoading(false)
  }

  useEffect(() => {
    refreshData()
  }, [])

  const handleFeedbackSubmit = () => {
    refreshData()
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>📊 Feedback Dashboard</h1>
          <p>Upteky Solution Pvt. Ltd. - Feedback Management System</p>
        </header>

        <div className="dashboard">
          <div className="dashboard-left">
            <FeedbackForm 
              apiUrl={API_URL} 
              onSubmit={handleFeedbackSubmit}
            />
          </div>

          <div className="dashboard-right">
            <AnalyticsCards stats={stats} loading={loading} />
            <FeedbackTable feedbacks={feedbacks} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


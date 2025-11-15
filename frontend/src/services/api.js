import axios from 'axios'

export const getFeedbacks = async (apiUrl) => {
  const response = await axios.get(`${apiUrl}/api/feedback`)
  return response.data
}

export const createFeedback = async (apiUrl, feedbackData) => {
  const response = await axios.post(`${apiUrl}/api/feedback`, feedbackData)
  return response.data
}

export const getStats = async (apiUrl) => {
  const response = await axios.get(`${apiUrl}/api/stats`)
  return response.data
}


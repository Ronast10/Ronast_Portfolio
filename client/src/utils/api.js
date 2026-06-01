import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
})

export const getProjects = () => API.get('/projects')
export const getAdventures = (type) => API.get(`/adventures${type ? `?type=${type}` : ''}`)
export const sendMessage = (data) => API.post('/contact', data)
export const incrementView = (id) => API.post(`/projects/${id}/view`)
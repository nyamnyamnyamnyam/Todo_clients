import axios from 'axios'

const baseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '')

export const login = async (username, password) => {
    const response = await axios.post(baseUrl + '/todos/login', { username, password })

    return response.data
}
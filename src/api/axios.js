import axios from 'axios'

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/meta/`,
  timeout: 1000,
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('supernova_token')
    if (token) config.headers.authorization = `Bearer ${token}`
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

instance.interceptors.response.use(null, function (error) {
  if (error.response && error.response.status === 401) {
    localStorage.removeItem('supernova_token')
    window.location.href = '/supernova/login'
  }
  return Promise.reject(error)
})

export default instance

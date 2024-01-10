import axios from 'axios'

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_MS_URL}/`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MS_TOKEN}`,
  },
  timeout: 1000,
})

export const search = async (index, search, filter = null, limit = 100) => {
  const res = await instance.post(`/indexes/${index}/search`, {
    q: search,
    filter,
    limit,
  })
  return res.data.hits
}

export default search

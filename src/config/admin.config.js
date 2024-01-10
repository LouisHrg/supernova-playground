import axios from '@/api/axios'
import search from '@/api/search'

const formSerializer = (data) => {
  const output = {}
  data.map(el => {
    output[el.id] = el.value
  })
  return output
}

const errorParser = (errors) => {
  const { message } = errors
  const output = {}
  message.forEach(field => {
    output[field.property] = { errors: field.errors }
  })

  return output
}

const config = {
  axiosInstance: axios,
  searchMethod: search,
  prefix: 'supernova',
  name: 'Supernova',
  primaryKey: '_id',
  formSerializer: formSerializer,
  errorParser: errorParser,
  logo: '/logo.png',
  search_indexes: ['users', 'projects', 'movies']
}

export default config

import base from './base'

const baseUrl = process.env.REACT_APP_API_URL

const baseApi = base(baseUrl)

const Api = {
  request(path, options) {
    return baseApi.request(path, options)
  },
  get(path, options) {
    return baseApi.request(path, options)
  },
  post(path, options = {}) {
    return baseApi.request(path, { ...options, method: 'POST' })
  },
  delete(path, options = {}) {
    return baseApi.request(path, { ...options, method: 'DELETE' })
  },
  update(path, options = {}) {
    return baseApi.request(path, { ...options, method: 'PUT' })
  },
}

export { baseUrl }

export default Api

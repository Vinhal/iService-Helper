import axios from 'axios'
import qs from 'qs'
import defaultsDeep from 'lodash.defaultsdeep'
import loading from 'commons/utils/loading'
import { onResponseError } from './interceptors'

const paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat' })

const getConfig = () => ({
  headers: {
    Accept: 'application/json',
  },
  paramsSerializer,
  loader: true,
})

const base = (baseURL, config) => {
  const axiosApi = axios.create({
    mode: 'cors',
    baseURL,
    ...config,
  })

  axiosApi.request = (path, options) => {
    const mergedOptions = defaultsDeep(options, getConfig())
    const loadingId = mergedOptions.loader && loading.show()

    return axiosApi(path, mergedOptions)
      .then(resp => resp.data)
      .finally(() => loadingId && loading.close(loadingId))
  }

  axiosApi.interceptors.response.use(null, onResponseError)

  return axiosApi
}

export default base

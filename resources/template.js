import Api from './api/api'

const path = '/template'

const templateApi = {

  request(data) {
    return Api.post(path, { data })
  },

}

export default templateApi

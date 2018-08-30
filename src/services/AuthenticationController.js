import api from '@/services/api'

export default {
  register (params) {
    return api().post('register', params)
  },
  login (params) {
    return api().post('login', params)
  }
}

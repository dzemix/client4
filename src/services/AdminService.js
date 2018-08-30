import api from '@/services/api'

export default {
  login (params) {
    return api().post('admin', params)
  }
}

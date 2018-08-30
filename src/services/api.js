import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `http://95.49.108.169:8081/`,
    headers: {
      Authorization: `Bearer ${store.state.adminToken}`
    }
  })
}

import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `https://shop-server-testing.herokuapp.com/`,
    headers: {
      Authorization: `Bearer ${store.state.adminToken}`
    }
  })
}

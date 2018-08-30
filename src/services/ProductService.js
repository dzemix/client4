import api from '@/services/api'

export default {
  create (params) {
    return api().post('product/create', params)
  },
  index () {
    return api().get('product')
  },
  view (value) {
    return api().get(`product/${value}`)
  },
  gallery (param) {
    return api().get(`product/gallery/${param}`)
  },
  createGallery (params) {
    return api().post('product/gallery/create', params)
  },
  update (value) {
    return api().patch('product/edit', value)
  }
}

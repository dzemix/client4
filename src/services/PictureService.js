import api from '@/services/api'

export default {
  upload (formData) {
    return api().post('/photos', formData)
  },
  uploadGallery (formData) {
    return api().post('/photos/gallery', formData)
  }
}

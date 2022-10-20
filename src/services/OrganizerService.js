import apiClient from '@/services/AxiosClient.js'

export default {
  getOrganizers() {
    return apiClient.get('/organizers')
  }
}

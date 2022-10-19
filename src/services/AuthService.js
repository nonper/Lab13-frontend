import apiClient from './AxiosClient'
import GStore from '@/store'

export default {
  login(user) {
    return apiClient
      .post('/auth', {
        username: user.username,
        password: user.password
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        GStore.currentUser = res.data.user
        return Promise.resolve(res.data)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  },
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    GStore.currentUser = null
  },
  getUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

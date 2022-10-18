import apiClient from './AxiosClient'

export default {
  login(user) {
    return apiClient
      .post('/auth', {
        username: user.username,
        password: user.password
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        return Promise.resolve(res.data)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  }
}

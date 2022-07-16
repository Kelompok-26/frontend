const state = () => ({
  token: null,
  isAuth: false,
  level: '0',
  sakit: '',
  id: null,
  User: {},
})

const mutations = {
  setToken(state, param) {
    state.token = param
  },

  setisAuth(state, param) {
    state.isAuth = param
  },

  setLevel(state, param) {
    state.level = param
  },

  setID(state, param) {
    state.id = param
  },

  setUser(state, param) {
    state.User = param
  },
}

const actions = {
  setToken(store, param) {
    store.commit('setToken', param)
  },

  async fetchLogin(store, param) {
    const response = await this.$axios.post(
      'http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/user/login',
      {
        email: param.email,
        password: param.password,
      }
    )
    if (response.data.User) {
      this.$cookies.set('token', response.data.User, {
        path: '/',
      })

      this.$cookies.set('role', 'User', {
        path: '/',
      })
    }
    const userID = response.data['User Id']
    store.commit('setID', userID)

    store.commit('setisAuth', true)
    store.commit('setToken', response.data.User)

    this.$router.push('/').catch(() => {})
  },

  async fetchUser(store, param) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/users/${param.id}`,
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
    }

    const response = await this.$axios(config)

    store.commit('setUser', response.data.data)
  },

  fetchLogout(store) {
    this.$cookies.remove('token')
    this.$cookies.remove('role')
    store.commit('setisAuth', 'false')
    store.commit('setToken', null)
    this.$router.push('/')
  },
}

export { state, mutations, actions }

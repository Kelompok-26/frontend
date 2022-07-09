const state = () => ({
  token: null,
  isAuth: false,
  level: '0',
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
}

const actions = {
  setToken(store, param) {
    store.commit('setToken', param)
  },

  async fetchLogin(store, param) {
    const response = await this.$axios.post(
      'ec2-54-160-45-255.compute-1.amazonaws.com:8080/user/login',
      {
        email: param.email,
        password: param.password,
      }
    )

    store.commit('setLevel', '1')

    this.$cookies.set('isAuth', true, {
      path: '/',
    })

    // localStorage.setItem('isAuth', true)

    this.$cookies.set('token', response.data.User, {
      path: '/',
    })

    store.commit('setisAuth', true)
    store.commit('setToken', response.data.User)

    this.$router.push('/')
  },
  async fetchLogout(store) {},
}

export { state, mutations, actions }

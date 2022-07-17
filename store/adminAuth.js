const state = () => ({
  token: null,
  isAuth: false,
  level: '0',
  sakit: '',
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

  setPenyakit(state, param) {
    state.sakit = param
  },
}

const actions = {
  setToken(store, param) {
    store.commit('setToken', param)
  },

  async fetchLogin(store, param) {
    const response = await this.$axios.post(
      'http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/admin/login',
      {
        email: param.email,
        password: param.password,
      }
    )

    if (response.data.Admin) {
      this.$cookies.set('token', response.data.Admin, {
        path: '/',
      })

      this.$cookies.set('role', 'Admin', {
        path: '/',
      })
    }

    // store.commit('setisAuth', true)
    store.commit('setToken', response.data.Admin)

    this.$router.push('/admin/dashboard')
  },
  adminLogout(store) {
    this.$cookies.remove('token')
    this.$cookies.remove('role')
    this.$router.push('/admin/')

    store.commit('setToken', null)
    store.commit('setIsAuth', null)
  },
}

export { state, mutations, actions }

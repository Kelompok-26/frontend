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
      'https://api.capstone.thisham.my.id/login',
      {
        email: param.email,
        password: param.password,
      }
    )
    const token = response.data.data.token

    console.log(token)
    // store.commit('setLevel', '1')

    // localStorage.setItem('isAuth', true)

    this.$cookies.set('token', response.data.data.token, {
      path: '/',
    })

    store.commit('setisAuth', true)
    store.commit('setToken', response.data.data.token)

    this.$router.push('/')
  },
  async fetchLogout(store) {},
}

export { state, mutations, actions }

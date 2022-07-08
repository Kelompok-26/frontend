const state = () => ({
  token: null,
  isAuth: false,
})

const mutations = {
  setToken(state, param) {
    state.token = param
  },

  setisAuth(state, param) {
    state.isAuth = param
  },
}

const actions = {
  setToken(store, param) {
    store.commit('setToken', param)
  },

  async fetchLogin(store, param) {
    const response = await this.$axios.post(
      'https://virtserver.swaggerhub.com/Dzaakk/C-loyal/1.0.0/login',
      {
        phonenumber: param.phonenumber,
        password: param.password,
      }
    )

    this.$cookies.set('isAuth', true, {
      path: '/',
    })

    // localStorage.setItem('isAuth', true)

    this.$cookies.set('token', response.data.token, {
      path: '/',
    })

    store.commit('setisAuth', true)
    store.commit('setToken', response.data.token)

    this.$router.push('/')
  },
  async fetchLogout(store) {},
}

export { state, mutations, actions }

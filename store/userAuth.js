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
      'http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/user/login',
      {
        email: param.email,
        password: param.password,
      }
    )

    console.log(response.data)
    // store.commit('setLevel', '1')

    // localStorage.setItem('isAuth', true)
    // if (response.data.Admin) {
    //   this.$cookies.set('token', response.data.User, {
    //     path: '/',
    //   })

    //   this.$cookies.set('role', 'User', {
    //     path: '/',
    //   })
    // }

    // store.commit('setisAuth', true)
    // store.commit('setToken', response.data.data.token)

    // this.$router.push('/')
  },
  async fetchLogout(store) {},
}

export { state, mutations, actions }

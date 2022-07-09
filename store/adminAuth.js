const state = () => ({
  token: null,
  level: '0',
})

const mutations = {
  setToken(state, param) {
    state.token = param
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
      'ec2-54-160-45-255.compute-1.amazonaws.com:8080/admin/login',
      {
        email: param.email,
        password: param.password,
      }
    )

    if (!response.data.admin === null) {
      store.commit('setLevel', 2)
    }

    this.$cookies.set('token', response.data.admin, {
      path: '/admin/',
    })
    store.commit('setToken', response.data.admin)

    this.$router.push('/admin/dashboard')
  },
  async fetchLogout(store) {},
}

export { state, mutations, actions }

export const state = () => ({
  adminUser: [],
  token: '',
  Id: null,
  point: null,
  mes: false,
  Isimes: null,
})

export const mutations = {
  setGetUser(state, param) {
    state.adminUser = param
  },
  setToken(state, param) {
    state.token = param
  },
  setId(state, param) {
    state.Id = param
  },
  setPoint(state, param) {
    state.point = param
  },
  setMessage(state, param) {
    state.mes = param
  },
  IsisetMessage(state, param) {
    state.Isimes = param
  },
}

export const actions = {
  getAllUser(store, param) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/users`,
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
    }

    this.$axios(config).then((res) => store.commit('setGetUser', res.data.data))
  },
  messageUser(store, param) {
    store.commit('setMessage', true)
    store.commit('IsisetMessage', param.message)
  },

  closeMes(store) {
    store.commit('setMessage', false)
    store.commit('IsisetMessage', null)
  },
  getIndexData(store, param) {
    store.commit('setToken', param.token)
    store.commit('setId', param.Id)
    store.commit('setPoint', param.Point)
    this.$router.push('/admin/data-user/edit')
  },
}

export const state = () => ({
  AllTran: null,
  User: null,
  paket: null,
  pulsa: null,
  cash: null,
  em: null,
})

export const mutations = {
  setAllTransaction(state, param) {
    state.AllTran = param
  },
  setGetUserTotal(state, param) {
    state.User = param
  },

  paketLength(state, param) {
    state.paket = param
  },

  pulsaLength(state, param) {
    state.pulsa = param
  },

  cashLength(state, param) {
    state.cash = param
  },

  emLength(state, param) {
    state.em = param
  },
}

export const actions = {
  fetchAllTransaction(store, param) {},
  getAllTransaction(store, param) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/transaction`,
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
    }

    this.$axios(config).then((res) =>
      store.commit('setAllTransaction', res.data.data.length)
    )
  },
  getAllUser(store, param) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/users`,
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
    }

    this.$axios(config).then((res) =>
      store.commit('setGetUserTotal', res.data.data.length)
    )
  },

  getAllProductLength(store) {
    this.$axios
      .get(
        'http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/PaketData'
      )
      .then((res) => store.commit('paketLength', res.data.data.length))

    this.$axios
      .get(
        'http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/Pulsa'
      )
      .then((res) => store.commit('pulsaLength', res.data.data.length))

    this.$axios
      .get(
        'http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/Cashout'
      )
      .then((res) => store.commit('cashLength', res.data.data.length))

    this.$axios
      .get(
        'http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/E-Money'
      )
      .then((res) => store.commit('emLength', res.data.data.length))
  },
}

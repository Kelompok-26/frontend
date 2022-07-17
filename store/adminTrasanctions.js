const state = () => ({
  token: null,
  Tran: [],
})

const mutations = {
  setTrans(state, param) {
    state.Tran = param
  },
}

const actions = {
  getAllTransaction(store, param) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/transaction`,
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
    }

    this.$axios(config).then((res) => store.commit('setTrans', res.data.data))
  },
}

export { state, mutations, actions }

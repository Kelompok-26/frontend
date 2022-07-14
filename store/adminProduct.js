export const state = () => ({
  type: '',
})

export const getter = {}

export const mutations = {
  setTypeProduct(state, param) {
    state.type = param
  },
}

export const actions = {
  fetchProduct(store, param) {
    store.commit('setTypeProduct', param.typeProduct)
  },
}

export const state = () => ({
  tipe: '',
  index: '',
  obj: Object,
})

export const getter = {}

export const mutations = {
  setIndex(state, param) {
    state.index = param
  },
  setTipe(state, param) {
    state.Tipe = param
  },
  setObj(state, param) {
    state.obj = param
  },
}

export const actions = {
  getObjTrans(store, param) {
    // console.log(param)
    store.commit('setObj', param)
  },
}

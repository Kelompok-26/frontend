export const state = () => ({
  Paket: null,
  Pulsa: null,
  Cash: null,
  emoney: null,
  PanjangPaket: null,
  PanjangPulsa: null,
  PanjangCash: null,
  PanjangEmoney: null,
})

export const mutations = {
  setAllStokPaket(state, param) {
    state.Paket = param
  },

  setAllStokPulsa(state, param) {
    state.Pulsa = param
  },

  setAllStokCash(state, param) {
    state.Cash = param
  },

  setAllStokEmoney(state, param) {
    state.emoney = param
  },

  setAllStokPanjangPaket(state, param) {
    state.PanjangPaket = param
  },

  setAllStokPanjangPulsa(state, param) {
    state.PanjangPulsa = param
  },

  setAllStokPanjangCash(state, param) {
    state.PanjangCash = param
  },

  setAllStokPanjangEmoney(state, param) {
    state.PanjangEmoney = param
  },
}

export const actions = {
  async getAllStokPaket(store) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/PaketData`,
    }

    const response = await this.$axios(config)

    const panjang = response.data.data.length
    // console.log(response.data)

    store.commit('setAllStokPaket', response.data.data)
    store.commit('setAllStokPanjangPaket', panjang)
  },

  async getAllStokPulsa(store) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/Pulsa`,
    }

    const response = await this.$axios(config)

    const panjang = response.data.data.length

    store.commit('setAllStokPulsa', response.data.data)
    store.commit('setAllStokPanjangPulsa', panjang)
  },

  async getAllStokCash(store) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/Cashout`,
    }

    const response = await this.$axios(config)

    const panjang = response.data.data.length

    store.commit('setAllStokCash', response.data.data)
    store.commit('setAllStokPanjangCash', panjang)
  },

  async getAllStokEmoney(store) {
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/E-Money`,
    }

    const response = await this.$axios(config)

    const panjang = response.data.data.length

    store.commit('setAllStokEmoney', response.data.data)
    store.commit('setAllStokPanjangEmoney', panjang)
  },
}

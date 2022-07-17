export const state = () => ({
  type: '',
  name: null,
  provider: null,
  id: null,
  nominal: null,
  stok: null,
  tipeProd: null,
  poin: null,
})

export const getter = {}

export const mutations = {
  setTypeProduct(state, param) {
    state.type = param
  },
  setId(state, param) {
    state.id = param
  },

  setName(state, param) {
    state.name = param
  },
  setProvider(state, param) {
    state.provider = param
  },
  setNominal(state, param) {
    state.nominal = param
  },
  setStok(state, param) {
    state.stok = param
  },

  setPoint(state, param) {
    state.poin = param
  },

  setType(state, param) {
    state.tipeProd = param
  },
}

export const actions = {
  fetchProduct(store, param) {
    store.commit('setTypeProduct', param.typeProduct)
  },
  createProduct(store, param) {
    const createProdak = {
      type_product: param.tipe,
      product_name: param.name,
      provider_name: param.provider,
      nominal: param.nominal,
      point: param.poin,
      stock: param.stok,
    }
    const config = {
      method: 'post',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products`,
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
      data: createProdak,
    }

    this.$axios(config).then((res) => console.log(res))
  },
  editProduk(store, param) {
    store.commit('setId', param.id)
    store.commit('setName', param.product_name)
    store.commit('setProvider', param.provider_name)
    store.commit('setType', param.type_product)
    store.commit('setNominal', param.nominal)
    store.commit('setPoint', param.point)
    store.commit('setStok', param.stock)

    this.$router.push({
      name: 'admin-typeProduct-edit',
      params: {
        typeProduct: param.type_product,
      },
    })
  },
}

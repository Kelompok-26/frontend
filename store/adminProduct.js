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
  createProduct(store, param){
    const createProdak = {
    "type_product": param.tipe,
    "product_name": param.name,
    "provider_name": param.provider,
    "nominal": param.nominal,
    "point" : param.poin,
    "stock" : param.stok

    }
    const config = {
      method: 'post',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products`,
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
      data: createProdak,
      
    }

    this.$axios(config)
      .then((res) => console.log(res))
      
  }
}

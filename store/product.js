export const state = () => ({
  paketData: [
    {
      nominal: '1 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '2 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '3 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '4 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '5 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '6 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '7 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '8 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '9 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '10 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
    {
      nominal: '11 GB',
      productType: 'Paket Data',
      poin: '10 Poin',
    },
  ],
  pulsa: [
    {
      nominal: '10k',
      productType: 'Pulsa',
      poin: '10 Poin',
    },
    {
      nominal: '10k',
      productType: 'Pulsa',
      poin: '10 Poin',
    },
    {
      nominal: '10k',
      productType: 'Pulsa',
      poin: '10 Poin',
    },
    {
      nominal: '10k',
      productType: 'Pulsa',
      poin: '10 Poin',
    },
    {
      nominal: '10k',
      productType: 'Pulsa',
      poin: '10 Poin',
    },
    {
      nominal: '10k',
      productType: 'Pulsa',
      poin: '10 Poin',
    },
    {
      nominal: '10k',
      productType: 'Pulsa',
      poin: '10 Poin',
    },
  ],
  cashout: [
    {
      nominal: '10k',
      productType: 'Cashout',
      poin: '10 Poin',
    },
    {
      nominal: '20k',
      productType: 'Cashout',
      poin: '10 Poin',
    },
    {
      nominal: '30k',
      productType: 'Cashout',
      poin: '10 Poin',
    },
    {
      nominal: '40k',
      productType: 'Cashout',
      poin: '10 Poin',
    },
    {
      nominal: '50k',
      productType: 'Cashout',
      poin: '10 Poin',
    },
    {
      nominal: '60k',
      productType: 'Cashout',
      poin: '10 Poin',
    },
    {
      nominal: '70k',
      productType: 'Cashout',
      poin: '10 Poin',
    },
  ],
  emoney: [
    {
      nominal: '10k',
      productType: 'E-Money',
      poin: '10 Poin',
    },
    {
      nominal: '20k',
      productType: 'E-Money',
      poin: '10 Poin',
    },
    {
      nominal: '30k',
      productType: 'E-Money',
      poin: '10 Poin',
    },
    {
      nominal: '40k',
      productType: 'E-Money',
      poin: '10 Poin',
    },
    {
      nominal: '50k',
      productType: 'E-Money',
      poin: '10 Poin',
    },
    {
      nominal: '60k',
      productType: 'E-Money',
      poin: '10 Poin',
    },
    {
      nominal: '70k',
      productType: 'E-Money',
      poin: '10 Poin',
    },
  ],

  product: [],
  id: null,
})

export const getter = {
  getPaketData(state) {
    return state.product.filter(state.product.type_product === 'Paket Data')
  },
}

export const mutations = {
  setProduct(state, param) {
    state.product = param
  },

  setId(state, param) {
    state.id = param
  },
}

export const actions = {
  async fetchProduct(store) {
    const response = await this.$axios.get(
      'https://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products'
    )

    console.log(response.data)

    store.commit('setProduct', response.data.data)
  },

  getId(store, param) {
    store.commit('setId', param.id)
  },
}

export const state = () => ({
    Stok : null,
  })
  
  export const mutations = {
    getAllStok(state, param) {
      state.Stok = param
    },
  }

  export const actions = {
    getAllStok(store, param){
        const config = {
            method: 'get',
            url: `ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/PaketData`,
            headers: {
              Authorization: `Bearer ${param.token}`,
            },
            
          }
      
          this.$axios(config)
            .then((res) =>  store.commit('setAllTransaction', res.data.data))
           
    },
    
  }

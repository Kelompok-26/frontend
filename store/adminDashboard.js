export const state = () => ({
    AllTran : null,
  })
  
  export const mutations = {
    setAllTransaction(state, param) {
      state.AllTran = param
    },
  }

  export const actions = {
    fetchAllTransaction(store, param){
        
    },
    getAllTransaction(store, param){
        const config = {
            method: 'get',
            url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/transaction`,
            headers: {
              Authorization: `Bearer ${param.token}`,
            },
            
          }
      
          this.$axios(config)
            .then((res) =>  store.commit('setAllTransaction', res.headers['content-length']))
           
    }
    
  }

export const state = () => ({

})

export const getter = {

}

export const mutations = {
increment(state) {
state.counter++
}
}

export const actions = {
async fetchCounter(state) {
// make request
const res = { data: 10 };
state.counter = res.data;
return res.data;
}
}

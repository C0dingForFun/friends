import { createStore } from 'vuex'

export default createStore({
  state: {
    cars:null,
    gaming_consoles:null,
    friends:null
  },
  getters: {
  },
  mutations: {
    setCars(state, payload){
      state.cars = payload
    },
    setGaming_Consoles(state, payload){
      state.gaming_consoles = payload
    },
    setFriends(state, payload){
      state.friends = payload
    }
  },
  actions: {
    async getItems({commit}){
      let fetchedItems = await fetch('https://c0dingforfun.github.io/friends_items/data/dejavue.json')
      let items = await fetchedItems.json()
      console.log(items);
      let {cars,gaming_consoles,friends} = items
      commit('setCars', cars)  
      commit('setGaming_Consoles', gaming_consoles)  
      commit('setFriends', friends)  
    }
  },
  modules: {
  }
})

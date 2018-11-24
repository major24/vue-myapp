import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Steve', registered: false},
      {id: 2, name: 'Jonathan', registered: false},
      {id: 3, name: 'Mary', registered: false},
      {id: 4, name: 'Anthony', registered: false},
    ],
    products: [
      {id: 0, text: 'Tomato'},
      {id: 1, text: 'Cheese'},
      {id: 2, text: 'Mushroom'}
    ],
    checkedoutProducts: [
    ]
  }
})

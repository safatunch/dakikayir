import Vue from 'vue'
import Vuex from 'vuex'

import VenueModule from './modules/VenueModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    VenueModule
  }
})

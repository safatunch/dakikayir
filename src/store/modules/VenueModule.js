import Vue from 'vue'

const state = {
  Venues: [],
  Venue: null
}

const getters = {
  /* eslint eqeqeq: 0 */
  GetVenue (state) {
    return (key) => state.Venues.filter(x => x.Id == key)[0]
  },
  Venues (state) {
    return state.Venues
  },
  Venue (state) {
    return state.Venue
  }
}

const mutations = {
  SetVenues (state, data) {
    state.Venues = data
  },

  SetVenue (state, data) {
    state.Venue = data
  }
}

const actions = {
  GetVenues ({commit}, query) {
    var url = 'Venue'
    var params = ''
    if (query && query.page) {
      params += ('page=' + query.page + '&')
    }
    if (query && query.limit) {
      params += ('limit=' + query.limit + '&')
    }
    Vue.http.get(url + '?' + params).then(response => {
      commit('SetVenues', response.body)
    })
  },
  GetVenue ({commit}, id) {
    Vue.http.get('Venue/' + id).then(response => {
      commit('SetVenue', response.body)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

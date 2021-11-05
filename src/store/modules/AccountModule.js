import Vue from 'vue'

const state = {
  Token: ''
}

const getters = {
  IsAuthenticated: (state) => {
    return state.Token !== ''
  }
}

const mutations = {
  SetToken: (state, value) => {
    state.Token = value
  }
}

const actions = {
  InitAuth: ({commit}) => {
    const token = localStorage.getItem('token')
    if (token) {
      Vue.http.headers.common['Authorization'] = 'bearer ' + token
      commit('SetToken', token)
    } else {
      commit('SetToken', '')
    }
  },
  Login: ({commit}, user) => {
    return new Promise((resolve, reject) => {
      Vue.http.post('User/Login', user
      ).then((resp) => {
        const response = resp.body
        if (response.status === true) {
          Vue.http.headers.common['Authorization'] = 'bearer ' + response.data
          localStorage.setItem('token', response.data)
          commit('SetToken', response.data)
          resolve()
        } else {
          reject(response.data)
        }
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

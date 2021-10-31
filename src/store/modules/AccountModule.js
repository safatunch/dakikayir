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
      commit('SetToken', token)
    } else {
      commit('SetToken', '')
    }
  },
  Login: ({commit}, user) => {
    Vue.http.post('User/Login', user
    ).then((resp) => {
      if (resp.status) {
        localStorage.setItem('token', resp.body)
        commit('SetToken', resp.body)
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

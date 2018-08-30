import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    admin: null,
    adminToken: null,
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      if (user) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setToken (state, token) {
      state.token = token
    },
    setAdmin (state, admin) {
      state.admin = admin
    },
    setAdminToken (state, adminToken) {
      state.adminToken = adminToken
    }
  },
  actions: {
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setAdmin ({commit}, admin) {
      commit('setAdmin', admin)
    },
    setAdminToken ({commit}, adminToken) {
      commit('setAdminToken', adminToken)
    }
  }
})

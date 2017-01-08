import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  passes: [],
  satellites: []
}

const mutations = {
  setPasses(state, { passes }) {
    state.passes = passes
  },
  setSatellites(state, { satellites }) {
    state.satellites = satellites
  }
}

const actions = {
  refreshData({ commit }) {
    fetch("/api/v1/satellites")
      .then(response => response.json())
      .then(satellites => { commit("setSatellites", { satellites })})

    fetch("/api/v1/passes")
      .then(response => response.json())
      .then(passes => { commit("setPasses", { passes })})
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

store.dispatch("refreshData")

export default store

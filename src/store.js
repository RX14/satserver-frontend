import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
  passes: {},
  satellites: [],
  files: {}
}

const mutations = {
  addPasses(state, { passes }) {
    passes.forEach(pass => {
      Vue.set(state.passes, pass.id, pass)
    })
  },
  setSatellites(state, { satellites }) {
    state.satellites = satellites
  },
  setFiles(state, { files, pass_id }) {
    Vue.set(state.files, pass_id, files)
  }
}

const actions = {
  refreshData({ commit }) {
    fetch("/api/v1/satellites")
      .then(response => response.json())
      .then(satellites => { commit("setSatellites", { satellites })})

    fetch("/api/v1/passes")
      .then(response => response.json())
      .then(passes => { commit("addPasses", { passes })})
  },
  getPass({ commit }, pass_id) {
    fetch(`/api/v1/passes/${pass_id}`)
      .then(response => response.json())
      .then(pass => commit("addPasses", { passes: [pass] }))
  },
  getFiles({ commit }, pass_id) {
    fetch(`/api/v1/passes/${pass_id}/files`)
      .then(response => response.json())
      .then(files => { commit("setFiles", { files, pass_id })})
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

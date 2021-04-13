const state = () => ({
  teamAPoint: 1000,
  teamBPoint: 1000,
  currentTeam: 'A',
  currentQuestion: null,
  currentSelection: 1,
  usedQuestions: []
})

const getters = {}

const actions = {}

const mutations = {
  addPoint(state, payload) {
    state[`team${payload.teamName}Point`] += payload.amount;
  },
  subtractPoint(state, payload) {
    state[`team${payload.teamName}Point`] -= payload.amount;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

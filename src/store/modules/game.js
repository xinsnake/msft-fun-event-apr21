const state = () => ({
  teamAPoint: 1000,
  teamBPoint: 1000,
  currentTeam: 'A',
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
  },
  addUsedQuestion(state, qid) {
    state.usedQuestions.push(qid);
  },
  changeTeam(state) {
    state.currentTeam = state.currentTeam === 'A' ? 'B' : 'A';
  },
  resetGame(state) {
    state.teamAPoint = 1000;
    state.teamBPoint = 1000;
    state.currentTeam = 'A';
    state.usedQuestions = [];
    console.log(state);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

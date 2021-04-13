const state = () => ({
  s1: {
    software100: {
      points: 100,
      question: 'This is a sample question',
      selections: {
        1: 'answer 1',
        2: 'answer 2',
        3: 'answer 3',
        4: 'answer 4'
      },
      answer: 2,
      used: false
    },
    software200: {},
    software300: {},
    security100: {},
    security200: {},
    security300: {},
    database100: {},
    database200: {},
    database300: {},
    architecture100: {},
    architecture200: {},
    architecture300: {},
    linux100: {},
    linux200: {},
    linux300: {},
    web100: {},
    web200: {},
    web300: {},
    office100: {},
    office200: {},
    office300: {},
    theory100: {},
    theory200: {},
    theory300: {}
  },
  s3: {

  }
})

const getters = {}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

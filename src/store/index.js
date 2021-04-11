import Vue from 'vue'
import Vuex from 'vuex'
import readAndGuesses from "@/store/modules/readAndGuesses";
import game from "@/store/modules/game";
import multipleChoices from "@/store/modules/multipleChoices";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    game,
    multipleChoices,
    readAndGuesses
  },
  strict: debug,
})

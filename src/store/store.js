import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentCard: {},
    score: 0
  },
  getters: {
    getCurrentCard: state => {
      return state.currentCard
    },
    getCurrentScore: state => {
      return state.score
    }
  },
  mutations: {
    setCurrentCard: (state, card) => {
      state.currentCard = card
    },
    setCurrentScore: (state, newScore) => {
      state.score += newScore
    }
  }
})

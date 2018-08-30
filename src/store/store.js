import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentCard: {},
    towerLine: [],
    pyramid1: [],
    pyramid2: [],
    pyramid3: [],
    score: 0
  },
  getters: {
    getCurrentCard: state => {
      return state.currentCard
    },
    getCurrentScore: state => {
      return state.score
    },
    getTowerLineCards: state => {
      return state.towerLine
    },
    getPyramid1: state => {
      return state.pyramid1
    },
    getPyramid2: state => {
      return state.pyramid2
    },
    getPyramid3: state => {
      return state.pyramid3
    }
  },
  mutations: {
    setCurrentCard: (state, card) => {
      state.currentCard = card
    },
    setCurrentScore: (state, newScore) => {
      state.score += newScore
    },
    setTowerLineCards: (state, towerLineCards) => {
      state.towerLine = towerLineCards
    },
    changeVisibility: (state, index) => {
      state.towerLine[index].visible = false
    },
    setPyramid1: (state, pyramid) => {
      state.pyramid1 = pyramid
    },
    setPyramid2: (state, pyramid) => {
      state.pyramid2 = pyramid
    },
    setPyramid3: (state, pyramid) => {
      state.pyramid3 = pyramid
    }
  }
})

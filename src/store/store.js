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
    score: 0,
    appKey: ''
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
    },
    getCurrentKey: state => {
      return state.appKey
    },
    checkEmptyTowers: state => {
      return (state.pyramid1[3] == null && state.pyramid2[3] == null && state.pyramid3[3] == null)
    }
  },
  mutations: {
    updateKey: (state, key) => {
      state.appKey = key
    },
    setCurrentCard: (state, card) => {
      state.currentCard = card
    },
    setCurrentScore: (state, newScore) => {
      state.score += newScore
    },
    setScore: (state, score) => {
      state.score = score
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

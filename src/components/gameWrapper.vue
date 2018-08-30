<template>
  <div class="triPeaks__wrapper">
    <div class="triPeaks__score">Score: {{ score }}</div>
    <div class="triPeaks">
      <tri-tower pyramidNumber="1" :towerBottomShowCards="towerOneShowCards" class="tower"></tri-tower>
      <tri-tower pyramidNumber="2" :towerBottomShowCards="towerTwoShowCards" class="tower"></tri-tower>
      <tri-tower pyramidNumber="3" :towerBottomShowCards="towerThreeShowCards" class="tower"></tri-tower>
    </div>
    <div class="triPeaks__line">
      <tower-line :deckCards="deckCards" />
    </div>
  </div>
</template>

<script>
import deckData from '../services/data/cards.json'
import triTower from './tower/tower.vue'
import towerLine from './towerLine/towerLine.vue'

const NUMBER_OF_CARDS = 52

export default {
  name: 'gameWrapper',
  data () {
    return {
      deckCards: [],
      pyramid1: [],
      pyramid2: [],
      pyramid3: []
    }
  },
  components: {
    triTower,
    towerLine
  },
  computed: {
    score () {
      return this.$store.getters.getCurrentScore
    },
    towerOneShowCards () {
      return this.$store.getters.getTowerLineCards.slice(0, 4)
    },
    towerTwoShowCards () {
      return this.$store.getters.getTowerLineCards.slice(3, 7)
    },
    towerThreeShowCards () {
      return this.$store.getters.getTowerLineCards.slice(6, 10)
    }
  },
  methods: {
    shuffle (array) {
      // eslint-disable-next-line
      var currentIndex = array.length, temporaryValue, randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }
  },
  beforeMount () {
    const deck = this.shuffle(deckData)
    const towerLineCards = []

    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
      if (i < 6) {
        deck[i].blueVisible = true
        this.pyramid1.push(deck[i])
      } else if (i < 12) {
        deck[i].blueVisible = true
        this.pyramid2.push(deck[i])
      } else if (i < 18) {
        deck[i].blueVisible = true
        this.pyramid3.push(deck[i])
      } else if (i < 28) {
        towerLineCards.push(deck[i])
      } else {
        this.deckCards.push(deck[i])
      }
    }

    this.$store.commit('setTowerLineCards', towerLineCards)
    this.$store.commit('setPyramid1', this.pyramid1)
    this.$store.commit('setPyramid2', this.pyramid2)
    this.$store.commit('setPyramid3', this.pyramid3)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.triPeaks {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  &__score {
    text-align: left;
    font-family: 'Karla';
    font-size: 20px;
    position: relative;
    letter-spacing: .1px;
    font-weight: 700;
    margin: 16px 0 30px;
  }

  &__wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  &__line {
    display: flex;
    justify-content: center;
  }

  .towers {
    width: 33%;
  }
}
</style>

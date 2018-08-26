<template>
  <div class="triPeaks__wrapper">
    <div class="triPeaks__score">Score: {{ score }}</div>
    <div class="triPeaks">
      <tri-tower class="tower"></tri-tower>
      <tri-tower class="tower"></tri-tower>
      <tri-tower class="tower"></tri-tower>
    </div>
    <div class="triPeaks__line">
      <tower-line :deckCards="deckCards" :towerLine="towerLineCards" />
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
      pyramidCards: [],
      towerLineCards: [],
      deckCards: []
    }
  },
  components: {
    triTower,
    towerLine
  },
  computed: {
    score () {
      return this.$store.getters.getCurrentScore
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

    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
      if (i < 18) {
        this.pyramidCards.push(deck[i])
      } else if (i < 28) {
        this.towerLineCards.push(deck[i])
      } else {
        this.deckCards.push(deck[i])
      }
    }
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
    width: 60%;
    display: flex;
    flex-direction: column;
  }

  &__line {
    display: flex;
  }

  .towers {
    width: 33%;
  }
}
</style>

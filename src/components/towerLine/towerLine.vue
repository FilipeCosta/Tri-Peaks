<template>
  <div class="towerLine-wrapper">
    <div class="towerLine">
      <template v-for="(line, index) in towerLine">
      <img
        :class="{'towerLine--hide': !line.visible}"
        :key="line.number"
        @click="removeCard(line, index)"
        class="towerLine__image"
        :src="line.src"
        alt="">
      </template>
    </div>
    <tri-pack :deckCards="deckCards" />
  </div>
</template>

<script>
import triPack from '../triPack/triPack.vue'

const LAST_CARD_TYPE = 1
const FIRST_CARD_TYPE = 13

export default {
  data () {
    return {
      currentCard: {}
    }
  },
  props: {
    towerLine: {
      type: Array,
      required: true
    },
    deckCards: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeCard (line, index) {
      this.getCurrentCard()
      const nextCardType = line.type + 1
      const beforeCardType = line.type - 1

      const firstCardCheck = (this.currentCard.type === LAST_CARD_TYPE && line.type === FIRST_CARD_TYPE)
      const lastCardCheck = (this.currentCard.type === FIRST_CARD_TYPE && line.type === LAST_CARD_TYPE)
      const otherCardCheck = (nextCardType === this.currentCard.type) || (beforeCardType === this.currentCard.type)

      if ((firstCardCheck || lastCardCheck) || otherCardCheck) {
        this.towerLine[index].visible = false
        this.$store.commit('setCurrentCard', line)
        this.$store.commit('setCurrentScore', 12)
      }
    },
    getCurrentCard () {
      this.currentCard = this.$store.getters.getCurrentCard
    }
  },
  components: {
    triPack
  }
}
</script>

<style lang="scss">
  .towerLine {
    display: flex;
    justify-content: center;
    position: relative;
    top: -90px;
    left: -5px;

    &--hide {
      visibility: hidden;
    }

    &__image {
      width: 80px;
      height: 100px;

      &:not(:first-child) {
        margin-left: 3px;
      }
    }
  }
</style>

<template>
  <div class="towerLine-wrapper">
    <div class="towerLine">
      <template v-for="(line, index) in towerLine">
      <card
        :class="{'towerLine--hide': !line.visible}"
        :key="line.number"
        :cardNumber="line.number"
        @click="removeCard(line, index)"
        class="towerLine__image"
        alt="card" />
      </template>
    </div>
    <tri-pack :deckCards="deckCards" />
  </div>
</template>

<script>
import Card from '../card/card.vue'
import triPack from '../triPack/triPack.vue'
import removeCardHandler from '../../mixins/removeCardHandler.js'

export default {
  mixins: [removeCardHandler],
  props: {
    deckCards: {
      type: Array,
      required: true
    }
  },
  computed: {
    towerLine () {
      return this.$store.getters.getTowerLineCards
    },
    currentCard () {
      return this.$store.getters.getCurrentCard
    }
  },
  methods: {
    removeCard (line, index) {
      if (this.removeCardHandler(line)) {
        this.$store.commit('changeVisibility', index)
        this.$store.commit('setCurrentCard', line)
        this.$store.commit('setCurrentScore', 12)
      }
    }
  },
  components: {
    triPack,
    Card
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
    z-index: 1;

    &--hide {
      visibility: hidden;
    }

    &__image {
      &:not(:first-child) {
        margin-left: 3px;
      }
    }
  }
</style>

<template>
  <div class="triPack">
    <img
      @click="refreshCurrentCard()"
      :style="{'left': -index * 30}"
      v-for="(card, index) in deckCards" :key="card.number"
      src="/static/images/cardThemes/blue.png"
      alt="">
    <div class="triPack__currentCard">
      <img :src="currentCard.src" alt="">
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  props: {
    deckCards: {
      type: Array,
      required: true
    }
  },
  computed: {
    currentCard () {
      return this.$store.getters.getCurrentCard
    }
  },
  methods: {
    refreshCurrentCard () {
      this.$store.commit('setCurrentCard', cloneDeep(this.deckCards.pop()))
      // this.currentCard = this.$store.getters.getCurrentCard
    }
  },
  beforeMount () {
    this.refreshCurrentCard()
  }
}
</script>

<style lang="scss">
  .triPack {
    display: flex;
    margin-left: -40px;
    justify-content: center;
    position: relative;
    margin-top: -20px;

    &__currentCard {
      margin-left: 40px;
    }

    img {
      width: 80px;
      height: 100px;
      position: relative;
      &:not(:first-child) {
        margin-left: -75px;
      }
    }
  }
</style>

<template>
  <div class="triPack">
    <card
      class="triPack__deck"
      @show="refreshCurrentCard()"
      :style="{'left': -index * 30}"
      v-for="(card, index) in deckCards" :key="card.number"
      :cardNumber="-1"
      alt="" />
    <div class="triPack__currentCard">
      <card :cardNumber="currentCard.number" alt="" />>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import Card from '../card/card.vue'
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
    }
  },
  beforeMount () {
    this.refreshCurrentCard()
  },
  components: {
    Card
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

    &__deck {
      width: 80px;
      height: 100px;
      position: relative;
      transition: transform .05s ease-in;

      &:last-of-type:hover {
        transform: translateY(-5px);
        cursor: pointer;
      }

      &:not(:first-child) {
        margin-left: -75px;
      }
    }
  }
</style>

<template>
  <div class="tower1">
    <div class="tower1__top-card">
      <div :class="{'tower1__top-card-image--hide' : pyramid[3] == null}">
        <card
          @click="removeCard(pyramid[3], 3)"
          v-if="showTopCard"
          class="tower1__top-card-image  tower1__second-level-images"
          :card-number="pyramid[3].number"
          alt="" />
        <card
          v-else
          class="tower1__top-card-image"
          alt="" />
      </div>
      <div class="tower1__second-level">
        <div :class="{'tower1__top-card-image--hide' : pyramid[5] == null}">
          <card
            @click="removeCard(pyramid[5], 5)"
            v-if="showMiddleLevelLeft"
            class="tower1__top-card-image tower1__second-level-images"
            :card-number="pyramid[5].number"
            alt="" />
          <card
            v-else
            class="tower1__top-card-image tower1__second-level-images"
            alt="" />
        </div>
        <div :class="{'tower1__top-card-image--hide' : pyramid[4] == null}">
          <card
            @click="removeCard(pyramid[4], 4)"
            v-if="showMiddleLevelRight"
            class="tower1__top-card-image tower1__second-level-images"
            :card-number="pyramid[4].number"
            alt="" />
          <card
            v-else
            class="tower1__top-card-image tower1__second-level-images"
            alt="" />
        </div>
      </div>
      <div class="tower1__third-level">
        <div :class="{'tower1__top-card-image--hide' : pyramid[0] == null}">
          <card
            @click="removeCard(pyramid[0], 0)"
            v-if="showLastLevelLeft"
            class="tower1__top-card-image tower1__third-level-images"
            :card-number="pyramid[0].number"
            alt="" />
          <card
            v-else
            class="tower1__top-card-image tower1__third-level-images"
            alt="" />
        </div>
        <div :class="{'tower1__top-card-image--hide' : pyramid[1] == null}">
          <card
            @click="removeCard(pyramid[1], 1)"
            v-if="showLastLevelMiddle"
            class="tower1__top-card-image tower1__third-level-images"
            :card-number="pyramid[1].number"
            alt="" />
          <card
            v-else
            class="tower1__top-card-image tower1__third-level-images"
            alt="" />
        </div>
        <div :class="{'tower1__top-card-image--hide' : pyramid[2] == null}">
          <card
            @click="removeCard(pyramid[2], 2)"
            v-if="showLastLevelRight"
            class="tower1__top-card-image tower1__third-level-images"
            :card-number="pyramid[2].number"
            alt="" />
          <card
            v-else
            class="tower1__top-card-image tower1__third-level-images"
            alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RemoveCardHandler from '../../mixins/removeCardHandler.js'
import Card from '../card/card.vue'
export default {
  mixins: [RemoveCardHandler],
  components: {
    Card
  },
  props: {
    towerBottomShowCards: {
      type: Array,
      required: true
    },
    pyramidNumber: {
      type: String,
      required: true
    }
  },
  methods: {
    removeCard (line, index) {
      if (this.removeCardHandler(line)) {
        this.$set(this.pyramid, index, null)
        this.$store.commit(`setPyramid${this.pyramidNumber}`, this.pyramid)
        this.$store.commit('setCurrentCard', line)
        this.$store.commit('setCurrentScore', 12)
      }
    }
  },
  computed: {
    currentCard () {
      return this.$store.getters.getCurrentCard
    },
    showTopCard () {
      return this.pyramid[4] == null && this.pyramid[5] == null && this.pyramid[3] != null
    },
    showMiddleLevelLeft () {
      return this.pyramid[0] == null && this.pyramid[1] == null && this.pyramid[5] != null
    },
    showMiddleLevelRight () {
      return this.pyramid[1] == null && this.pyramid[2] == null && this.pyramid[4] != null
    },
    showLastLevelLeft () {
      return !this.towerBottomShowCards[0].visible && !this.towerBottomShowCards[1].visible && this.pyramid[0] != null
    },
    showLastLevelMiddle () {
      return !this.towerBottomShowCards[1].visible && !this.towerBottomShowCards[2].visible && this.pyramid[1] != null
    },
    showLastLevelRight () {
      return !this.towerBottomShowCards[2].visible && !this.towerBottomShowCards[3].visible && this.pyramid[2] != null
    },
    pyramid () {
      return this.$store.getters[`getPyramid${this.pyramidNumber}`]
    }
  }
}
</script>

<style lang="scss">
  .tower1 {
    margin-right: .5%;

    &__top-card {
      width: 100%;
      margin: 0 auto;
    }

    &__top-card-image {
      &--hide {
        visibility: collapse;
      }
    }

    &__second-level {
      display: flex;
      justify-content: center;
      position: relative;
      top: -30px;
    }

    &__third-level {
      display: flex;
      justify-content: center;
      position: relative;
      top: -60px;

      &:nth-child(1) {
        margin-right: 1px;
      }

      &:nth-child(2) {
        margin-left: 1px;
      }

      &:nth-child(2) {
        margin-left: 1px;
      }
    }

    &__second-level-images {
      &:nth-child(1) {
        margin-right: 1px;
      }

      &:nth-child(2) {
        margin-left: 1px;
      }
    }

    &__third-level-images {
      &:nth-child(1) {
        margin-right: 1px;
      }

      &:nth-child(2) {
        margin-left: 1px;
      }

      &:nth-child(3) {
        margin-left: 1px;
      }
    }
  }
</style>

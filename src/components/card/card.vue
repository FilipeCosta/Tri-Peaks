<template>
  <div class="card">
    <img
      v-if="cardNumber === -1"
      @click="$emit('show')"
      src="/static/images/cardThemes/blue.png"
      alt="">
    <img
      v-else
      @click="$emit('click')"
      class="card__visible"
      :src="`/static/images/cards/${cardNumber}.png`"
      alt="">
  </div>
</template>

<script>
export default {
  props: {
    cardNumber: {
      type: Number,
      default: -1
    }
  }
}
</script>

<style lang="scss" scoped>
.card {

  img {
    width: 40px;
    height: 60px;
  }

  &__visible {
    transition: transform .05s ease-in;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 570px) {
    img {
      width: 60px;
      height: 80px;
    }
  }

  @media only screen and (min-width: 880px) {
    img {
      width: 80px;
      height: 100px;
    }
  }
}
</style>

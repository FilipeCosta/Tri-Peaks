<template>
  <div class="triPack">
    <img :style="{'left': -index * 30}" v-for="index in 30" :key="index" src="@/assets/images/cardThemes/blue.png" alt="">
    <div class="triPack__currentCard">
      <img src="@/assets/images/cards/1.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .triPack {
    display: flex;
    margin-left: -40px;
    justify-content: center;

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

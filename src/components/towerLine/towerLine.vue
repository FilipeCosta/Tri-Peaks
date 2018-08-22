<template>
  <div class="towerLine-wrapper">
    <div class="towerLine">
      <img v-for="index in 10" :key="index" class="towerLine__image" src="@/assets/images/cards/1.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .towerLine {
    display: flex;
    position: relative;
    top: -90px;
    left: -40px;

    &__image {
      width: 80px;
      height: 100px;

      &:not(:first-child) {
        margin-left: 3px;
      }
    }
  }
</style>

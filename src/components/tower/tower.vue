<template>
<div class="tower1">
  <div class="tower1__top-card">
    <img class="tower1__top-card-image" src="/static/images/cardThemes/blue.png" alt="">
    <div class="tower1__second-level">
      <img class="tower1__top-card-image tower1__second-level-images" src="/static/images/cardThemes/blue.png" alt="">
      <img class="tower1__top-card-image tower1__second-level-images" src="/static/images/cardThemes/blue.png" alt="">
    </div>
    <div class="tower1__third-level">
      <img class="tower1__top-card-image tower1__third-level-images" src="/static/images/cardThemes/blue.png" alt="">
      <img class="tower1__top-card-image tower1__third-level-images" src="/static/images/cardThemes/blue.png" alt="">
      <img class="tower1__top-card-image tower1__third-level-images" src="/static/images/cardThemes/blue.png" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {

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
      width: 80px;
      height: 100px;
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

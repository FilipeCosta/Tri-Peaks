<template>
  <div class="triPeaks__wrapper">
    <div class="triPeaks">
      <tri-tower class="tower"></tri-tower>
      <tri-tower class="tower"></tri-tower>
      <tri-tower class="tower"></tri-tower>
    </div>
    <div class="triPeaks__line">
      <tower-line />
    </div>
    <tri-pack />
  </div>
</template>

<script>
import triTower from './tower/tower.vue'
import towerLine from './towerLine/towerLine.vue'
import triPack from './triPack/triPack.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    triTower,
    towerLine,
    triPack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.triPeaks {
  display: flex;

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

<template>
  <div class="tri-ranking-row">
    <div class="tri-ranking-row__name">
      {{ name }}
    </div>
    <div class="tri-ranking-row__score">
      {{ score }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    score: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .tri-ranking {
    &-row {
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
    }
  }
</style>

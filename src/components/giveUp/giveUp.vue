<template>
  <div class="giveUp">
    <div class="giveUp__text">Are you sure you want to give up?</div>
    <div class="giveUp__buttons">
      <button @click="giveUp" class="giveUp__continue">Yes</button>
      <button class="giveUp__stop" @click="$emit('isNotGiveUp')">No</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    giveUp () {
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.giveUp {
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  padding: 30px;
  background: #EDC9AF;
  border: 6px solid #C2B280;

  &__text {
    font-size: 20px;
    font-family: 'Karla';
    font-weight: 700;
    color: #C2B280;
    text-align: center;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-left: 6px;

    button {
      transition: transform .05s ease-in;

      &:hover {
        transform: scale(1.05);
        cursor: pointer;
      }
    }
  }

  &__continue {
    color: #C2B280;
    border: 1px solid #C2B280;
    padding: 8px 24px;
    font-size: 18px;
    margin-right: 6px;
  }

  &__stop {
    color: #C2B280;
    border: 1px solid #C2B280;
    padding: 8px 24px;
    font-size: 18px;
  }
}
</style>

<template>
  <div class="tri-modal">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .tri-modal {
    display: flex;
    z-index: 4;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    height: 25%;
    padding: 50px;
    background: #EDC9AF;
    border: 6px solid #C2B280;
  }
</style>

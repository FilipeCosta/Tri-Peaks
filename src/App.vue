<template>
  <div id="app">
    <router-view :key="currentKey" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    currentKey () {
      return this.$store.getters.getCurrentKey
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 16px;
  height: 100vh;
  position: relative;
}
</style>

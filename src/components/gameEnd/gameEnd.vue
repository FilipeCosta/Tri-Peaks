<template>
<div class="youwin">
  <img width="60" src="/static/images/background/Pharaoh.png" alt="">
  <div class="youwin__wrapper">
    <div class="youwin__text">
      Congratulation <br> You Win
    </div>
    <div class="youwin__buttons">
      <button @click="saveScore" class="youwin__continue">Continue</button>
      <button @click="$router.go()" class="youwin__stop">Stop Playing</button>
    </div>
  </div>
  <img class="youwin__mirror" width="60" src="/static/images/background/Pharaoh.png" alt="">
</div>
</template>

<script>
export default {
  methods: {
    saveScore () {
      window.localStorage.setItem('score', JSON.stringify(this.score))
      window.localStorage.setItem('continuePressed', JSON.stringify(true))
      this.$store.commit('updateKey', this.generateRandomToken())
    },

    generateRandomToken () {
      const stringLength = 8

      const stringArray = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '?'
      ]

      let rndString = ''

      for (let i = 1; i < stringLength; i++) {
        const rndNum = Math.ceil(Math.random() * stringArray.length) - 1
        rndString = rndString + stringArray[rndNum]
      }

      return rndString
    }
  }
}
</script>

<style lang="scss" scoped>
.youwin {
  display: flex;
  z-index: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 25%;
  padding: 50px;
  background: #EDC9AF;
  border: 6px solid #C2B280;

  &__mirror {
    transform: scaleX(-1);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  &__text {
    font-size: 30px;
    font-family: 'Karla';
    font-weight: 700;
    color: #C2B280;
    text-align: center;
  }

  &__subText {
    font-size: 30px;
    font-family: 'Karla';
    font-weight: 700;
    color:#C2B280;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
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
    padding: 8px 14px;
    font-size: 18px;
    margin-right: 6px;
  }

  &__stop {
    color: #C2B280;
    border: 1px solid #C2B280;
    padding: 8px 14px;
    font-size: 18px;
  }
}
</style>

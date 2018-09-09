<template>
<div v-if="!showRanking" class="game-end">
  <tri-modal>
    <img width="60" src="/static/images/background/Pharaoh.png" alt="">
    <div class="game-end__wrapper">
      <div class="game-end__text">
        Congratulation <br> You Win
      </div>
      <div class="game-end__buttons">
        <button @click="saveScore" class="game-end__continue">Continue</button>
        <button @click="giveUp()" class="game-end__stop">Stop Playing</button>
      </div>
    </div>
    <img class="game-end__mirror" width="60" src="/static/images/background/Pharaoh.png" alt="">
  </tri-modal>
</div>
<tri-ranking :jumpToRanking="jumpToRanking" :keyToRemove="keyToRemove" v-else />
</template>

<script>
import firebase from 'firebase'
import triModal from '../tri-modal/tri-modal.vue'
import triRanking from '../tri-ranking/tri-ranking.vue'

export default {
  methods: {
    saveScore () {
      localStorage.setItem('score', JSON.stringify(this.score))
      this.$store.commit('updateKey', this.generateRandomToken())
      this.getRanking()
    },

    giveUp () {
      if (this.score !== 0) {
        if (this.getRankingEntrys() < 5) {
          this.jumpToRanking = false
        } else {
          this.removeLowestEntry()
        }
      }
      this.showRanking = true
      // this.$router.go()
    },

    getRankingEntrys () {
      let numberOfEntrys = 0
      const ref = firebase.database().ref()
      ref.on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          numberOfEntrys++
        })
      })
      return numberOfEntrys
    },

    removeLowestEntry () {
      const ref = firebase.database().ref()
      ref.orderByChild('value').limitToFirst(1).on('value', (snapshot) => {
        const key = Object.keys(snapshot.val())[0]
        if (this.score > parseInt(snapshot.val()[key].score)) {
          this.jumpToRanking = false
          this.keyToRemove = key
        } else {
          this.jumpToRanking = true
        }
      })

      if (this.keyToRemove != null) {
        this.jumpToRanking = false
      }
    },

    generateRandomToken () {
      const stringLength = 8

      const stringArray = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'
      ]

      let rndString = ''

      for (let i = 1; i < stringLength; i++) {
        const rndNum = Math.ceil(Math.random() * stringArray.length) - 1
        rndString = rndString + stringArray[rndNum]
      }

      return rndString
    }
  },
  computed: {
    score () {
      return this.$store.getters.getCurrentScore
    }
  },
  components: {
    triModal,
    triRanking
  },
  data () {
    return {
      showRanking: false,
      keyToRemove: null,
      jumpToRanking: false
    }
  }
}
</script>

<style lang="scss" scoped>
.game-end {
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

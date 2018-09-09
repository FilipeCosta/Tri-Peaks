<template>
  <div class="tri-ranking">
    <tri-modal>
      <div v-if="showInsertScore && !jumpToRanking" class="tri-ranking-info-wrapper">
        <div class="tri-ranking-info__name">Enter your name</div>
        <div v-if="!submited" class="tri-ranking-info">
          <input v-model="name" class="tri-ranking-info__input" type="text">
          <button @click="saveScore" class="tri-ranking-info__button">Submit</button>
        </div>
      </div>
      <div v-if="(!showInsertScore || jumpToRanking)" class="tri-ranking-main">
        <div v-if="loading" class="loader" id="loader-1"></div>
        <template  v-if="!loading">
          <div class="tri-ranking-main__title">Ranking</div>
          <div class="tri-ranking-main-wrapper">
            <tri-ranking-row
              class="tri-ranking-main__line"
              v-for="(item, index) in ranking"
              :key="index"
              :score="item.score"
              :name="item.name"
              />
          </div>
        </template>
      </div>
    </tri-modal>
  </div>
</template>

<script>
import firebase from 'firebase'
import triModal from '../tri-modal/tri-modal.vue'
import triRankingRow from './components/tri-ranking-row/tri-ranking-row.vue'

export default {
  data () {
    return {
      submited: false,
      name: '',
      loading: false,
      ranking: [],
      showInsertScore: true
    }
  },
  props: {
    keyToRemove: {
      type: String,
      default: null
    },
    jumpToRanking: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    saveScore () {
      this.loading = true
      if (this.keyToRemove) {
        firebase.database().ref().push({
          username: this.name,
          score: this.score
        })
      }
      this.showInsertScore = false
      this.getRanking()
    },
    getRanking () {
      this.loading = true
      const ref = firebase.database().ref()
      let tmpArray = []
      ref.on('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const data = childSnapshot.val()
          tmpArray.push({name: data.username, score: data.score})
        })
        this.ranking = tmpArray.sort((a, b) => b.score - a.score)
        this.loading = false
      })
    }
  },
  components: {
    triModal,
    triRankingRow
  },
  computed: {
    score () {
      return this.$store.getters.getCurrentScore
    }
  },
  beforeMount () {
    this.getRanking()
  }
}
</script>

<style lang="scss" scoped>
  .tri-ranking-info {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    margin-top: 30px;

    &__name {
      color: #C2B280;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: .1px;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      height: 100px;
    }

    &__input {
      padding: 10px;
      background-color: #fff;
      border: 2px solid #C2B280;
      color: black;
    }

    &__button {
      padding: 10px 12px;
      border: 2px solid #C2B280;
      color: black;
      transition: transform .1s ease;

      &:hover {
        transform: scale(1.01);
        cursor: pointer;
      }
    }
  }

  .tri-ranking-main {
    width: 100%;

    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-size: 18px;
      color: #C2B280;
      letter-spacing: .1px;
    }
  }

  .tri-ranking {
    .tri-modal {
      height: 250px;
    }
  }

.loader{
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%)
}

/* LOADER 1 */

#loader-1:before, #loader-1:after{
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 10px solid transparent;
  border-top-color: #C2B280;
}

#loader-1:before{
  z-index: 100;
  animation: spin 1s infinite;
}

#loader-1:after{
  border: 10px solid #ccc;
}

@keyframes spin{
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
}
</style>

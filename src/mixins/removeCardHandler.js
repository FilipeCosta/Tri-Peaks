const LAST_CARD_TYPE = 1
const FIRST_CARD_TYPE = 13

export default {
  methods: {
    removeCardHandler (line, index) {
      const nextCardType = line.type + 1
      const beforeCardType = line.type - 1

      const firstCardCheck = (this.currentCard.type === LAST_CARD_TYPE && line.type === FIRST_CARD_TYPE)
      const lastCardCheck = (this.currentCard.type === FIRST_CARD_TYPE && line.type === LAST_CARD_TYPE)
      const otherCardCheck = (nextCardType === this.currentCard.type) || (beforeCardType === this.currentCard.type)
      return ((firstCardCheck || lastCardCheck) || otherCardCheck)
    }
  }
}

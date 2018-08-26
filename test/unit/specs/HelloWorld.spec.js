import Vue from 'vue'
import GameWrapper from '@/components/gameWrapper'

describe('GameWrapper.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(GameWrapper)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})

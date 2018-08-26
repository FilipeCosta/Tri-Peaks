import Vue from 'vue'
import Router from 'vue-router'
import GameWrapper from '@/components/gameWrapper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameWrapper',
      component: GameWrapper
    }
  ]
})

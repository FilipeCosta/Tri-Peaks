import Vue from 'vue'
import Router from 'vue-router'
import GameWrapper from '@/components/gameWrapper'
import { Loading } from 'element-ui'

Vue.use(Router)
Vue.use(Loading)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameWrapper',
      component: GameWrapper
    }
  ]
})

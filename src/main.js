// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store.js'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA_hqzMBpkDc0U8sXaENq-Gu4fOkFWNnzY',
  authDomain: 'tripeaks-6be68.firebaseapp.com',
  databaseURL: 'https://tripeaks-6be68.firebaseio.com',
  projectId: 'tripeaks-6be68',
  storageBucket: 'tripeaks-6be68.appspot.com',
  messagingSenderId: '392314635112'
}

firebase.initializeApp(config)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

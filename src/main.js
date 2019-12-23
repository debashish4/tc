import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTimeago from 'vue-timeago'
import '@/assets/styles/normalize.css'
import '@/assets/styles/main.css'

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale

})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from '../../selfvue/src/App'
import router from './router'
import Elem from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'
Vue.use(Elem)

new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')

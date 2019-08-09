import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import validate from './plugins/validate'
import vmask from 'v-mask'

Vue.config.productionTip = false

//Agregando y configurando plugins -----
Vue.use(vmask)

//Iniciando la instancia de Vue
new Vue({
  router,
  vuetify,
  validate,
  store,
  render: h => h(App)
}).$mount('#app')

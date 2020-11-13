import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 配置全局自定义设置
import settings from '@/assets/js/settings'
Vue.prototype.$settings = settings;

// axios配置：cnpm install axios
import axios from 'axios'
Vue.prototype.$axios = axios;
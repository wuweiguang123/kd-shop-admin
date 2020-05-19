import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/global.css'
import './plugins/element.js'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8088/kdshop/'
// axios请求拦截 添加token
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

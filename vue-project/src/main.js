import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://jupiter.d.greeninvoice.co.il/api/v1'
//workaround for local work to avoid CORS issues
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

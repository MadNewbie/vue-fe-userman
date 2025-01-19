// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import VueToastr from "vue-toastr";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueToastr)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


console.log("Backend URL:", process.env.VUE_APP_BACKEND_URL);

console.log("All Env Variables:", process.env);
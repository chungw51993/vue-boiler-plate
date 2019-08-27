import Vue from 'vue';
import VueMeta from 'vue-meta';

import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

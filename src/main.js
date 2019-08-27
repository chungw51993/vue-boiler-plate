import Vue from 'vue';
import VueMeta from 'vue-meta';
import Vuetify from 'vuetify/lib';

import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = process.env.NODE_ENV === 'development';
Vue.config.devtools = process.env.NODE_ENV === 'development';

Vue.use(VueMeta);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

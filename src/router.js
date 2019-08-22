import Vue from 'vue';
import VueRouter from 'vue-router';

import TestComponent from './components/test/TestComponent.vue';
import AnotherComponent from './components/another/AnotherComponent.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: TestComponent,
  }, {
    path: '/another',
    component: AnotherComponent,
  }],
});

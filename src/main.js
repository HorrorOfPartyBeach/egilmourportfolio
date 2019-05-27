import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
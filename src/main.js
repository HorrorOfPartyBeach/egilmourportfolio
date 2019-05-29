import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/', component: NavBar },
    { path: '/', component: FooterComp }
  ]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
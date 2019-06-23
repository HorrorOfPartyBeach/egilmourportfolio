import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import ContactComp from './components/ContactComp.vue';
require('bootstrap/dist/css/bootstrap.min.css');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactComp }
  ]
});

new Vue({
  el: '#App',
  'router': router,
  components: {
    HomePage,
    ContactComp
  },
  render: h => h(App)
});
import Vue from 'vue';
import App from '../src/App';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import ContactComp from './components/ContactComp.vue';
//import NavBar from './components/NavBar.vue';
//import FooterComp from './components/FooterComp.vue';
require('bootstrap/dist/css/bootstrap.min.css');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactComp }
    //{ path: '/', component: NavBar },
    // { path: '/', component: FooterComp }
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
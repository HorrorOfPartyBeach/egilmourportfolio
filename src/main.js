import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import ContactComp from './components/ContactComp.vue';
import SingleProject from './components/SingleProject.vue';
import FirstProject from './components/FirstProject.vue';
import SecondProject from './components/SecondProject.vue';
import ThirdProject from './components/ThirdProject.vue';
require('bootstrap/dist/css/bootstrap.min.css');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: HomePage, query: {redirect: '/'} },
    { path: '/contact', component: ContactComp },
    { path: '/project/:name', component: SingleProject,
      children: [
        {
          path: 'portfolio',
          component: FirstProject
        },
        {
          path: 'daisy',
          component: SecondProject
        },
        {
          path: 'previous',
          component: ThirdProject
        }
      ]
  },
  { path: '*', redirect: '/' },
  ],
  scrollBehavior() {
    document.getElementById('App').scrollIntoView();
},
});

new Vue({
  el: '#App',
  'router': router,
  components: {
    HomePage,
    ContactComp,
    SingleProject
  },
  render: h => h(App)
});
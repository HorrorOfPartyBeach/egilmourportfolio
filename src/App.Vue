<template>
  <div id="app">
      <NavBar></NavBar>
      <router-view />
      <FooterComp></FooterComp>
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import FooterComp from './components/FooterComp.vue';
    import HomePage from './components/HomePage.vue';

    export default {
        name: 'app',
        components: { 
          "NavBar": NavBar,
          "FooterComp": FooterComp,
          "HomePage": HomePage
          }
    };

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>

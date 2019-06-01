<template>
  <div id="app">
        <HomePage></HomePage>
        <NavBar></NavBar>
        <router-view />
        <FooterComp></FooterComp>
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import FooterComp from './components/FooterComp.vue';

    export default {
        name: 'app',
        components: { 
          "NavBar": NavBar,
          "FooterComp": FooterComp }
    };

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
</style>

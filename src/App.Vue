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
        components: { NavBar, FooterComp }
    };

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>

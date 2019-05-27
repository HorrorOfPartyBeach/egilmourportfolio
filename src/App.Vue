<template>
  <div id="app">
        <HomePage></HomePage>
        <NavBar></NavBar>
        <router-view />
  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';

    export default {
        name: 'app',
        components: { NavBar }
    };

</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>

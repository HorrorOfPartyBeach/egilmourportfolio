<template>
    <div id="navbar">
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#">Emma Gilmour</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#about-me">About</b-nav-item>
        <b-nav-item href="#">Projects</b-nav-item>
        <b-nav-item href="#">Blog</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped>
    #navbar {
        background-color: orangered;
        font-family: Arial, Helvetica, sans-serif;
        /*This is not a font choice, this is just to test the right element is being targeted - bg color is not working*/
        /* font-family: 'Comic Sans MS'; */
    }
</style>
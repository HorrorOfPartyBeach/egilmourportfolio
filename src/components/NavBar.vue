<template>
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="/">Emma Gilmour</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link v-if="homeRoute() === true" class="nav-link" to="#">Home</router-link>
        <router-link v-if="homeRoute() === false" class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about-me">About</a>
        <!-- <router-link v-if="aboutRoute()" class="nav-link" href="/about-me">About</router-link> -->
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Blog</a>
      </li> -->
            <li class="nav-item">
              <!-- <router-link class="nav-link" to="/contact">Contact</router-link> -->
        <a class="nav-link" href="https://www.linkedin.com/in/emmagilmour1/">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
methods: {
      homeRoute() {
        if(this.$route.path == "/") {
          console.log(this.$route, 'ROUTE');
          return true
        } else {
          return false
        }
      },
      // aboutRoute() {
      //   console.log(this.$route, 'ROUTE');
      //   if(this.$route.path == "/project/:name") {
      //     return true
      //   } else {
      //     return false
      //   }
      // }
    }
}
</script>

<style scoped>
    #navbar {
        background-color: orangered;
        font-family: Arial, Helvetica, sans-serif;
        /*This is not a font choice, this is just to test the right element is being targeted - bg color is not working*/
        /* font-family: 'Comic Sans MS'; */
    }
</style>
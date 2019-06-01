<template>
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">Emma Gilmour</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="navbar">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about-me">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Blog</a>
      </li>
            <li class="nav-item">
        <a class="nav-link" href="#footer">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style scoped>
    #navbar {
        background-color: orangered;
        font-family: Arial, Helvetica, sans-serif;
        /*This is not a font choice, this is just to test the right element is being targeted - bg color is not working*/
        /* font-family: 'Comic Sans MS'; */
    }
</style>

// "bootstrap-vue": "^2.0.0-rc.21"
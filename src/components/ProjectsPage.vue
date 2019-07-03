<template>
            <!-- Projects -->
<div class="container-fluid"  id="projects">
  <div class="row" style="margin: 0;">

    <div class="col-sm">
        <div class="project-bg">
            <img class="circular-project-imgs" :src="require('../assets/deskimage.png')" alt="Emma Gilmour Portfolio Site Screenshot">
            <router-link class="project-buttons" tag="button" to="/project/portfolio">
            <div class="overlay-text" style="visibility: hidden;" aria-label="Portfolio: Emma Gilmour Portfolio">
                <p class="project-divs-p">
                    <strong>PORTFOLIO</strong>
                <br>
                Emma Gilmour Portfolio
                </p>
            </div>
            </router-link>
      </div>
    </div>

    <div class="col-sm">
        <div class="project-bg">
        <img class="circular-project-imgs" :src="require('../assets/daisylogo1.png')" alt="Daisy chatbot logo">
        <router-link class="project-buttons" tag="button" to="/project/daisy">
        <div class="overlay-text" style="visibility: hidden;" aria-label="Daisy: chatbot">
            <p class="project-divs-p">
                <strong>DAISY</strong>
            <br>
            Chatbot
            </p>
        </div>
        </router-link>
      </div>
    </div>

    <div class="col-sm">
        
        <div class="project-bg">
        <img class="circular-project-imgs" :src="require('../assets/altar.png')" alt="photo">
        <router-link class="project-buttons" tag="button" to="/project/previous">
        <div class="overlay-text" style="visibility: hidden;" aria-label="Previous: Non-coding projects">
            <p class="project-divs-p">
                <strong>PREVIOUS</strong>
            <br>
            Non-coding projects
            </p>
        </div>
        </router-link>
      </div>
    </div>

  </div>
</div>
</template>

<script>
//import SingleProject from './SingleProject.vue';
// import FirstProject from './FirstProject.vue';

export default {
    name: 'ProjectsPage',
    components: { 
        //"SingleProject": SingleProject,
        // "FirstProject": FirstProject
        }
}
</script>

<style>
/********* Projects Section START *******/
#projects {
    padding-top: 20px;
    padding-bottom: 20px;
    background: orangered;
    color: whitesmoke;
    text-align: center;
    display: flex;
}
.row {
    width: 100%;
    display:flex;
    text-align: center;
}
.col-sm {
    text-align: center;
    display: block;
}
.circular-project-imgs {
    border-radius: 50%;
    border: grey 3px solid;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    background: #000;
    text-align: center;
    margin: auto;
    display: block;
}
.overlay-text{
    text-align: center;
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
.project-bg {
    background-color: rgba(84, 80, 78, 0.56);
    display: block;
    text-align: center;
    padding-bottom: 10px;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    background: #000;
    margin: auto
}
.project-bg:hover .project-divs-p {
    visibility: visible;
    cursor: pointer;
}
.project-bg:hover .circular-project-imgs {
    opacity: 0.3;
    cursor: pointer;
}
.project-divs-p {
    text-align: center;
    vertical-align:text-bottom;
    padding-top: 20px;
    color: whitesmoke;
    max-width: 120px;
    margin: auto;
}

.project-buttons {
    display: block;
    text-align: center;
    width: 120px;
    height: 120px;
    border: transparent;
    border-radius: 100px;
    margin: auto;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
}
/********* Projects Section END *******/
</style>
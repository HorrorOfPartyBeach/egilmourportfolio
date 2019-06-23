<template>
            <!-- Projects -->
<div class="container-fluid"  id="projects">
  <div class="row" style="margin: 0;">

    <div class="col-sm">
        <div class="project-bg">
            <img class="circular-project-imgs" :src="require('../assets/deskimage.png')" alt="Emma Gilmour Portfolio Site Screenshot">
            <div class="overlay-text" style="visibility: hidden;">
                <p class="project-divs-p">
                    <strong>PORTFOLIO</strong>
                <br>
                    Emma Gilmour Portfolio
                </p>
            </div>
      </div>
    </div>

    <div class="col-sm">
        <div class="project-bg">
        <img class="circular-project-imgs" :src="require('../assets/daisylogo1.png')" alt="Daisy chatbot logo">
        <div class="overlay-text" style="visibility: hidden;">
            <p class="project-divs-p">
                <strong>DAISY</strong>
            <br>
                Chatbot
            </p>
      </div>
      </div>
    </div>

    <div class="col-sm">
        <div class="project-bg">
        <img class="circular-project-imgs" :src="require('../assets/altar.png')" alt="photo">
        <div class="overlay-text" style="visibility: hidden;">
            <p class="project-divs-p">
                <strong>PREVIOUS</strong>
            <br>
                Non-coding projects
            </p>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
    name: 'ProjectsPage'
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
}
.project-bg:hover .circular-project-imgs {
    opacity: 0.3;
}
.project-divs-p {
    text-align: center;
    vertical-align:text-bottom;
    padding-top: 20px;
    color: whitesmoke;
    max-width: 120px;
    margin: auto;
}
/********* Projects Section END *******/
</style>
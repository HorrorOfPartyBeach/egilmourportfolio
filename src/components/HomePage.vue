<template>
    <div id="HomePage">
        <div id="desk-img-div" class="overlay-image">
        <img class="desk-img" :src="require('../assets/deskimage1.png')" alt="desk">
        <div class="desk-img-text">
            <div id="desk-text-bg">
            <h1 class="desk-img-h1">Emma Gilmour</h1>
            <p id="desk-img-p">HTML | CSS | JAVASCRIPT | VUE | REACT</p>
            </div>
            </div>
        </div>

        <!-- About me section -->
        <div class="container-fluid" id="about-me">
            <h2 id="about-me-h2">Craft to Code Via Carpentry</h2>
            <br>
            <p class="about-me-p">
                Emma Gilmour is a full stack developer working mainly with JavaScript and JavaScript
                frameworks. After completing Northcoders; an intensive full-time, full stack coding 
                bootcamp; she was hired as a full stack developer in January 2019 and has since gained 
                experience with Vue.js and responsive web design.
            </p>
            <p class="about-me-p">
                Emma's first experience with coding came years before bootcamps and tech startups, in the
                form of editing the HTML in a MySpace page and a not unimpressive AOL Hometowns Scooby Doo
                fansite. The opportunity to learn more didn't occur until 2017 when she was accepted onto
                the first cohort of the TechReturners programme in MediaCity in Manchester. This introductory
                12 week (one day a week) course covered HTML, CSS, JavaScript, jQuery, basic git and BBC:MicroBit.
                Through TechReturners, Emma found out about Northcoders and was accepted onto the bootcamp in July
                2018.
            </p>
            <p class="about-me-p">
                Northcoders is a JavaScript based bootcamp, covering basic JavaScript, back end tech
                (postgreSQL, MongoDB, Express, Node.js), front end tech (React, Bootstrap) and testing suites/libraries
                (Mocha, Chai, Jest, Cypress)

            </p>
        </div>

        <!-- Projects -->
<div class="container-fluid"  id="projects">
  <div class="row" style="margin: 0;">
    <div class="col-sm">
        <div class="project-text">
            <p class="project-divs-p">
                <strong>Project 1</strong>
            <br>
                This Website
            </p>
      </div>
    </div>
    <div class="col-sm">
        <div class="project-bg">
        <img id="daisy-logo" :src="require('../assets/daisylogo1.png')" alt="Daisy logo">
        <div id="overlay-daisy-text" style="visibility: hidden;">
            <p class="project-divs-p">
                <strong>DAISY</strong>
            <br>
                Chatbot
            </p>
      </div>
      </div>
    </div>
    <div class="col-sm">
        <div class="project-text">
            <p class="project-divs-p">
                <strong>Project 3</strong>
            <br>
                Non-coding projects
            </p>
      </div>
    </div>
  </div>
</div>
        <!-- <FooterComp /> -->
    </div>
</template>

<script>

export default {
    name: 'HomePage'
}
</script>


<style scoped>
/* Extra extra small devices (phones 300px - 359px) */
@media only screen and (min-width: 300px) and (max-width: 359px) {
.overlay-image h1.desk-img-h1 {
    font-size: 30px;
}
.overlay-image p#desk-img-p {
    font-size: 14px;
}
h2#about-me-h2 {
    font-size: 20px;
}
p.about-me-p {
    font-size: 15px;
    padding-left: 20px;
    padding-right: 20px;
}
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 360px) and (max-width: 600px) {
.overlay-image h1.desk-img-h1 {
    font-size: 40px;
}
.overlay-image p#desk-img-p {
    font-size: 15px;
}
h2#about-me-h2 {
    font-size: 25px;
}
p.about-me-p {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
}
} 


/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) and (max-width: 767px) {
.overlay-image h1.desk-img-h1 {
    font-size: 60px;
}
.overlay-image p#desk-img-p {
    font-size: 30px;
}
h2#about-me-h2 {
    font-size: 40px;
}
p.about-me-p {
    font-size: 18px;
    padding-left: 20px;
    padding-right: 20px;
}
} 


/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

} 

/* Large devices (laptops/desktops, 992px and up) */
/* @media only screen and (min-width: 992px) {

}  */

/* Extra large devices (large laptops and desktops, 1200px and up) */
/* @media only screen and (min-width: 1200px) {

} */


/********* Simple overlay START*******/
/* Main container */
#desk-img-div {
    width: 100%;
    text-align:center;
    position: relative;
}
/* Image */
.overlay-image .desk-img {
    display: block;
    width: 100%;
    height: auto;
}
/* Text overlay */
#desk-text-bg{
    background-color: rgba(84, 80, 78, 0.56);
    display: block;
    text-align: center;
    padding-bottom: 10px;
}
.overlay-image .desk-img-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
.overlay-image .desk-img-h1 {
    color: whitesmoke;
    font-size: 80px;
    line-height: 1.5em;
    text-shadow: 2px 2px 2px #000;
}
.overlay-image #desk-img-p {
    color: whitesmoke;
    font-size: 40px;
    line-height: 1.5em;
    text-shadow: 2px 2px 2px #000;
}
/********* Simple overlay END *******/

/********* About Me Section START *******/
#about-me {
    padding-top: 20px;
    padding-bottom: 20px;
    background: #000;
    color: whitesmoke;
    text-align: center;
}
.about-me-p {
    padding-left: 80px;
    padding-right: 80px;
}
/********* About Me Section END *******/

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
#daisy-logo {
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
#overlay-daisy-bg {
    background-color: rgba(84, 80, 78, 0.56);
    display: block;
    text-align: center;
    padding-bottom: 10px;
    width: 120px;
    height: 120px;
    border-radius: 100px;
    background: #000;
    text-align: center;
    margin: auto;
}
#overlay-daisy-text{
    text-align: center;
    position: absolute;
    top: 50%;
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
    text-align: center;
    margin: auto
}
.project-bg:hover .project-divs-p {
    visibility: visible;
}
.project-bg:hover #daisy-logo {
    opacity: 0.3;
}
.project-divs-p {
    text-align: center;
    vertical-align:text-bottom;
    padding-top: 20px;
    color: whitesmoke;
}
/********* Projects Section END *******/
</style>
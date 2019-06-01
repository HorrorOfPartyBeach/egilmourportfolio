<template>
    <div id="HomePage">
        <div id="desk-img-div" class="overlay-image">
        <img class="desk-img" src="src\assets\deskimage1.png" alt="Desk Image">
        <div class="desk-img-text">
            <div id="desk-text-bg">
            <h1 class="desk-img-h1">Emma Gilmour</h1>
            <p id="desk-img-p">HTML | CSS | JAVASCRIPT | VUE | REACT | GIT</p>
            </div>
            </div>
        </div>
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

        <div class="container-fluid" id="projects">
            <div class="row">
                <div class="col-xs-4">
                    <div class="project-divs">
                    <p class="project-divs-p">
                        Project 1
                    <br>
                        This Website
                    </p>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="project-divs">
                    <p class="project-divs-p">
                        Project 2
                    <br>
                        Daisy
                    </p>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="project-divs">
                    <p class="project-divs-p">
                        Project 3
                    <br>
                        Non-coding projects
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <FooterComp />
    </div>
</template>

<script>
import FooterComp from './FooterComp.vue';

export default {
    components: {
        'footerComp': FooterComp
    },
}
</script>


<style scoped>
html {
  scroll-behavior: smooth;
}
/********* Simple overlay START*******/
/* Main container */
.overlay-image {
    position: relative;
    width: 100%;
}
#desk-img-div {
    width: 100%;
    text-align:center;
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
    padding-left: 100px;
    padding-right: 100px;
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
.project-cols .col {
    text-align: center;
}
/* .col-md-4 {
} */
.project-divs {
    width: 120px;
    height: 120px;
    border-radius: 100px;
    background: #000;
    display: inline-block;
}
.project-divs-p {
    text-align: center;
    vertical-align:text-bottom;
    padding-top: 20px;
}
/********* Projects Section END *******/
</style>
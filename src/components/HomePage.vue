<template>
    <main id="HomePage">
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
                experience with Vue.js, responsive web design and accessibility compliance.
            </p>
            <p class="about-me-p">
                Emma's first experience with coding was years before bootcamps, in the
                form of editing MySpace profile HTML and a not unimpressive AOL Hometowns Scooby Doo
                fansite. The opportunity to learn more didn't occur until 2017 when she was joined the 
                first TechReturners cohort in MediaCity in Manchester. This 12 week (once a week) course
                covered HTML, CSS, JavaScript, jQuery, basic git and BBC:MicroBit.
            </p>
            <p class="about-me-p">
                Through TechReturners, Emma found Northcoders and was accepted onto the bootcamp in July 
                2018. Northcoders is a JavaScript based bootcamp, covering JavaScript, back end tech
                (postgreSQL, MongoDB, Express, Node.js), front end tech (React, Bootstrap) and testing 
                (Mocha, Chai, Jest, Cypress).
            </p>
            <p class="about-me-p">
                Before retraining to be a developer, Emma had a varied career as a photographer/artist and 
                decorator/carpenter. While seemingly very different areas, the decorating and carpentry was 
                mainly focused on restoration and unique projects including designing and building a church 
                altar from reclaimed Victorian church pews. Several years later, the altar is still in use 
                in the church.
            </p>
        </div>
        <ProjectsPage></ProjectsPage>
    </main>
</template>

<script>
import ProjectsPage from './ProjectsPage.vue';

export default {
    name: 'HomePage',
    components: {
        "ProjectsPage": ProjectsPage
    }
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


</style>
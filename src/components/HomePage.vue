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
        <b-container id="about-me">
            <h2 id="about-me-h2">Craft to Code Via Carpentry</h2>
            <br>
            <p>
                Emma Gilmour is a full stack developer working mainly with JavaScript and frameworks such as React and Vue.

            </p>
        </b-container>
        <FooterComp />
    </div>
</template>

<script>

</script>


<style scoped>
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
    padding-top: 10px;
    padding-bottom: 10px;
    background: #000;
    color: whitesmoke;
}
/********* About Me Section END *******/
</style>
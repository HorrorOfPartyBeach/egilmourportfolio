<template>
    <footer id="footer">
        <span id="left-align-footer">
        <p class="footer-text">
            Emma Gilmour
            <br>
            Liverpool, UK
        </p>
        </span>
        <span id="right-align-footer">
            <p class="footer-text">
        <a class="socialIcons" href="https://dev.to/horrorofpartybeach"><i class="fab fa-dev fa-3x" title="horrorofpartybeach's DEV Profile"></i></a>
        <a class="socialIcons" href="https://github.com/HorrorOfPartyBeach"><i class="fab fa-github fa-3x"></i></a>
        <a class="socialIcons" href="https://www.linkedin.com/in/emmagilmour1/"><i class="fab fa-linkedin fa-3x"></i></a>
        </p>
        </span>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>

<style>
#footer {
background-color: rgb(83, 81, 81);
padding-top: 30px;
padding-left: 30px;
padding-right: 30px;
padding-bottom: 70px;
position: static;
bottom: 0;
width: 100%;
}
.footer-text {
    color: whitesmoke;
    font-family: 'Courier New', Courier, monospace;
}
#left-align-footer{
    float: left;
}
#right-align-footer{
    float: right;
}
.socialIcons {
    color: ghostwhite;
}
.socialIcons:focus,
.socialIcons:hover {
    color: orangered;
}
</style>

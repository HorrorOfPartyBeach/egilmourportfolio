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
        <a href="https://github.com/HorrorOfPartyBeach">Github</a> <br>
        <a href="https://www.linkedin.com/in/emmagilmour1/">LinkedIn</a>
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
margin-bottom: 0;
padding-top: 30px;
padding-bottom: 70px;
padding-left: 30px;
padding-right: 30px;
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
</style>

<template>
    <main id="other-main">
        <h1>Non-Coding Projects</h1>
            <hr class="style14">
    <section>
        <article id="making-other">
            <h2>More soon</h2>
        <p>
            Coming soon...
        </p>
            </article>
    </section>
    </main>
</template>

<script>
export default {
    name: 'ThirdProject'
}
</script>

<style scoped>
#other-main {
    min-height: 650px;
    background-color: ghostwhite;
    color: rgb(80, 79, 79);
}
#making-other {
    padding: 20px;
}
h1 {
    padding: 20px;
    font-weight: bold;
}
hr.style14 { 
  border: 0; 
  height: 1px; 
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
}
h2 {
    text-decoration: underline;
}
p {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
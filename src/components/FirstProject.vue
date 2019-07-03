<template>
    <main id="portfolio-main">
        <h1>Developing a Vue.js Portfolio Website</h1>
            <hr class="style14">
        <section>
        <article id="making-portfolio">
        <h2>Idea</h2>
        <p>
            I knew I needed a portfolio so I thought I'd also document the process of making it at the same 
            time. I've been using Vue.js for several months and I like how flexible it is. I also use it in 
            work so I thought it would be good practice to build my portfolio using it. I'm still undecided 
            as to whether I'll need Vuex for state management but if I add a blog section or anything else 
            that needs state management then I'll likely incorporate it.
        </p>
        <p>
            I want my site to be fast loading and be cross-browser compatible so I have used Webpack and 
            Babel too. I've had mixed dealings with Webpack but I do think it can be a good tool. I know 
            there's a lot of emphasis on how it needs no configuring but I haven't encountered a scenario 
            yet where it doesn't need a fair bit of configuring to work for me.
        </p>
           <h2>Development</h2>
        <p>
            I have already encountered a few issues, mainly related to Webpack. When I first ran `npm run 
            serve` on the bare bones layout, the homepage looked fine but it wouldn't build and deploy 
            properly in Netlify. After a lot of sifting through StackOverflow, I discovered I didn't have 
            my entry and output path properly set up in my Webpack config. After fixing this, the site 
            deployed but none of the images worked. I had an inkling that this was caused by a combination 
            of improper setup of fileloader in the config and/or not importing the images correctly and 
            after asking some other developers for their thoughts, this was confirmed. I was able to fix it 
            and re-deploy my portfolio.
        </p>
        <p>
            I've been doing a lot of work on fine-tuning the routing, there is still an issue with pressing 
            the 'Back' button from the projects pages if the route from the homepage contains an id rather 
            than just a route name, but I have prioritised getting some more content onto the pages before I 
            look at this.
        </p>
            <h2>Future</h2>
        <p>
            This is a gradual project which is going to be continually added it over time. I have a basic 
            roadmap for what I want to add but I have also kept the future quite flexible for it.  One of 
            the main things I am committed to is making the site as accessible as possible. This is an area 
            of development that I have been focusing on recently at work and I have completed the Web 
            Accessibility course on Udacity to learn more. So far, I have incorporated semantic HTML, 
            WAI-ARIA, tested colour contrast and keyboard navigation, and read through with NVDA and JAWS. 
            There is still plenty to do but this will hopefully stand as an example of how incorporating 
            accessibility doesn't mean compromising on design.
        </p>
            </article>
        </section>
        </main>
</template>

<script>
export default {
    name: 'FirstProject'
}
</script>

<style scoped>
#portfolio-main {
    min-height: 650px;
    background-color: ghostwhite;
    color: rgb(80, 79, 79);
}
#making-portfolio {
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

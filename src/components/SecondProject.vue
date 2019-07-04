<template>
        <main id="daisy-main">
        <h1>Daisy, Chatbot Extraordinaire!</h1>
            <hr class="style14">
        <section>
        <article id="making-daisy">
        <h2>Starting out</h2>
        <p>
            I started Northcoders with no real experience of JavaScript or any programming language outside 
            of HTML and CSS. After almost four months of intensive learning, we were put into teams and 
            asked to pitch several ideas to our tutors.
        </p>
        <img id="daisyLogo" :src="require('../assets/daisylogo.png')" alt="Daisy chatbot logo">
        <p>
            The team I was in was made up of myself, Annas, Sally, Matt and Paul. We came decided to make 
            a restaurant suggestions chatbot deployed in Facebook Messenger. Our minimal viable product 
            (MVP) was a bot which returned a card with a single restaurant suggestion. We split into two 
            teams to spike out different tech; one team looked at Google Dialogflow and the other looked 
            into the Microsoft bot-framework. We ultimately decided that Dialogflow didn’t offer as much 
            flexibility and also didn’t seem to have the same level of natural language processing that 
            Microsoft Luis did. We also used the Yelp API for the suggestions, it’s incredibly extensive 
            and we were able to get all of the information we needed from it, rather than having to use 
            multiple APIs as we initially thought we would. We named our bot, which stands for ‘Delivers 
            Artificially Intelligent Suggestions from Yelp’.
        </p>
        <h2>Early Achievements</h2>
        <p>
            We achieved our MVP within 2 days and expanded it to return a carousel of 5 cards and to also 
            deploy in Slack. One of the main challenges was actually getting the adaptive cards to look the 
            way we wanted them to. We didn’t find them very adaptive! Thanks to the Yelp API, we were able 
            to include the name, address, contact details, website and an image of the restaurant, a star 
            rating based on reviews, a price range, directions from the user’s location and a button that 
            auto-entered the restaurant’s phone number into the user’s phone so they could call to book.
        </p>
        <h2>React Native</h2>
        <p>
            Initially, our project was nearly entirely backend based and we worried that perhaps this 
            wasn’t enough for our final presentation. I was especially concerned because my strengths lie 
            in front end development and design, and at the time of this project, I still wasn’t as sure 
            of my back end JavaScript knowledge. We had already achieved quite a bit so I suggested that 
            we also create a React Native platform for Daisy.
        </p>
        <p>
            Since I was the most interested in front end development, I took the lead on learning React 
            Native and developing the app. The rest of the team were always on hand when I needed help or 
            input and Sally in particular was a great help when it came to getting the cards to work. 
        </p>
        <img id="daisyPlatforms" :src="require('../assets/daisycaptures.png')" alt="Screenshot of each version of Daisy app: Facebook, Slack, React Native">
        <p>
            I wanted the React Native version to look as close as possible to the Slack and Messenger 
            version so I looked for a chat UI which could provide that. The Gifted Chat library offered 
            what I was looking for. While the documentation is quite good, it was still a steep learning 
            curve to incorporate Gifted Chat into React Native and to also get Expo to behave on my cheap 
            phone and extremely slow, temperamental laptop! 
        </p>
        <div class="video-container">
            <iframe  width="420" height="315"  
                src="https://www.youtube.com/embed/bI1bX66AnhI" frameborder="0" allowfullscreen>
            </iframe>
        </div>
        <p>
            Like other teams who have used Expo before us, it proved to be tricky and crashed multiple 
            times a day. Despite this and the time limits (we had about 7-9 days in total to create our 3 
            versions of Daisy and 1-2 day to work on our final presentation), I produced a good version of 
            the app which differed in only one respect; it returns a single card at a time rather than a 
            carousel. Given more time, I could definitely have created the carousel and this is something 
            I would like to return to in the future. I think a lot of people have mixed experiences with 
            React Native/Expo but I really liked it and I am looking forward to making more projects with 
            it.
        </p>
        <h2>Team Daisy Forever!</h2>
        <p>
            Overall, I really enjoyed the project and we worked extremely well together as a team. We used 
            Slack, Kanban, our trusty whiteboard and face-to-face communication to keep on track with 
            everything. We had stand-ups 2-3 times a day and these provided a great opportunity to go over 
            problems and celebrate successes. A major part of why we worked so well together was down to 
            the fact that we celebrated small wins and came together to unravel problems as a group. Our 
            final presentation went really well with Daisy’s live demonstration going flawlessly, and it 
            was one of the most popular Northcoders presentations in the bootcamp’s history. Many months 
            later, we still have a group chat for the Daisy team and meet up when we can. It would be great 
            to one day have a start-up and do the whole thing for real!
        </p>
            </article>
        </section>
        </main>
</template>

<script>
export default {
    name: 'SecondProject'
}
</script>

<style scoped>
#daisy-main {
    min-height: 650px;
    background-color: ghostwhite;
    color: rgb(80, 79, 79);
}
#making-daisy {
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
#daisyLogo {
    text-align: center;
    border: #5F6A5A 3px solid;
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    max-width: 500px;
    margin-top: 20px;
    margin-bottom: 20px;
}
#daisyPlatforms {
    text-align: center;
    border: #5F6A5A 3px solid;
    border-radius: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: auto;
    max-width: 1000px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.video-container {
position: relative;
padding-bottom: 56.25%;
padding-top: 30px; height: 0; overflow: hidden;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 10px;
}

.video-container iframe,
.video-container object,
.video-container embed {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
}
</style>
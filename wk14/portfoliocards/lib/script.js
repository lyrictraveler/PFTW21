// instructions:

// convert existing Vue instance into a reusable component

//register the component using kabob-case so browser can recognize

Vue.component('portfolio-component', {
  // templates are written in HTML form, a "configuration object" With multi-line HTML use the back tick `

  template: `<div class="portfolio-container v-cloak">
                <h2 class="project-title">{{title}}</h2>
                <div class="image"><a v-bind:href="link">
                  <img v-bind:src="image" v-bind:alt="image-alt"/></a>
                </div>
                <div class="content">
                <div class="skills">Skills: {{skills}}</div>
            </div>`,

  // use props to pass the portfolio data into the component
  //we use props so that we can insert new data into our component, using v:bind to access those properties
  props: ['title', 'link', 'image', 'imageAlt', 'skills'],
});

// Your component should go above this line.
var vm = new Vue({
  el: '#card',
  data: {
    items: [
      {
        title: 'Church Website Design',
        link: 'https://www.westrichmondfriends.org/',
        image: 'img/wrfwebsite.jpeg',
        imageAlt: 'West Richmond Friends Meeting website',
        skills:
          'project management, blogging, testing and debugging, Constant Contact',
      },
      {
        title: '10.000 Jaroj: Epizodo 114 de 99% Nevidebla',
        link:
          'https://docs.google.com/presentation/d/1w5BmH99gTMSc-HOqhEv1WsXYV2P9yjisVL5ACEM3zFM/present?usp=sharing',
        image: 'img/99invisible.png',
        imageAlt: 'eerie photo with bilingual text in English and Esperanto',
        skills: 'project management, research, GoogleSuite',
      },
      {
        title: 'My Design Practice',
        link: 'https://www.youtube.com/watch?v=QHSu7Vqz34A',
        image: 'img/noisyscreen.png',
        imageAlt: 'broken glass with disruptive words',
        skills: 'design thinking, communication, Adobe Premier Rush',
      },
      {
        title: 'FCNL Case Study',
        link: 'https://github.com/lyrictraveler/fcnl_case_study',
        image: 'img/FCNL clone.png',
        imageAlt: 'clone of FCNL website',
        skills: 'HTML5, CSS, BMI, Grid',
      },
      {
        title: 'Holiday Party Game',
        link: 'https://lyrictraveler.github.io/wrfnew_party2020/',
        image: 'img/holidayparty.png',
        imageAlt: 'Christmas tree with ornaments',
        skills: 'project management, HTML, CSS, Grid',
      },
      {
        image: 'img/calculator.png',
        altText: 'image of simple calculator',
        link: 'https://plnkr.co/plunk/coD7LJUt9e6CVXci',
        title: 'A Handy Calculator',
        skills: 'JavaScript, Vue',
        description: 'Project for Web Development',
        id: 2009,
      },
      {
        image: 'img/restfulAPI.png',
        altText: 'image of framed titles',
        link: 'https://github.com/lyrictraveler/PFTW21/tree/main/wk10/art',
        title: 'Art Departments at the Met',
        skills: 'JavaScript, Restful APIs, Flex',
        description: 'Project for Web Development',
        id: 2009,
      },
      {
        image: 'img/keyboard.png',
        altText: 'colorful xylophone',
        link: 'https://github.com/lyrictraveler/PFTW21/tree/main/wk12/piano',
        title: 'Digital Piano',
        skills: 'Sounds with JavaScript',
        description: 'Project for Web Development',
        id: 2009,
      },
    ],
  },
});

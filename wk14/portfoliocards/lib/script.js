Vue.component('portfolio-component', {
  template: `<div class="portfolio-container  v-cloak">
                <h2 class="project-title">{{title}}</h2>
                <div class="image"><a v-bind:href="link">
                  <img v-bind:src="image" v-bind:alt="image-alt"/></a>
                </div>
                <div class="content">
                <div class="skills">Skills: {{skills}}</div>
            </div>`,
  props: ['title', 'link', 'image', 'imageAlt', 'skills']
});

var vm = new Vue({
  el: '#card',
  data: {
    items: [
      {
        title: 'Church Website Design',
        link: 'https://www.westrichmondfriends.org/',
        image: 'img/JPEG/wrfwebsite.jpg',
        imageAlt: 'West Richmond Friends Meeting website',
        skills: 'project management, testing and debugging'
      },
      {
        title: '10.000 Jaroj: Epizodo 114 de 99% Nevidebla',
        link:
          'https://docs.google.com/presentation/d/1w5BmH99gTMSc-HOqhEv1WsXYV2P9yjisVL5ACEM3zFM/present?usp=sharing',
        image: 'img/JPEG/99invisible.jpg',
        imageAlt: 'eerie photo with bilingual text in English and Esperanto',
        skills: 'design theory, research, GoogleSuite'
      },
      {
        title: 'My Design Practice',
        link: 'https://www.youtube.com/watch?v=QHSu7Vqz34A',
        image: 'img/JPEG/noisyscreen.jpg',
        imageAlt: 'broken glass with disruptive words',
        skills: 'research, UX, Adobe Premier Rush'
      },
      {
        title: 'CUCCS Blog',
        link: 'https://www.cuccs.org',
        image: 'img/JPEG/CUCCSblog.jpg',
        imageAlt: 'blog page',
        skills: 'project management, blogging, Constant Contact'
      },
      {
        title: 'FCNL Case Study',
        link: 'https://github.com/lyrictraveler/fcnl_case_study',
        image: 'img/JPEG/FCNL clone.jpg',
        imageAlt: 'clone of FCNL website',
        skills: 'HTML5, CSS, BEM, Grid'
      },
      {
        title: 'Holiday Party Game',
        link: 'https://lyrictraveler.github.io/wrfnew_party2020/',
        image: 'img/JPEG/holidayparty.jpg',
        imageAlt: 'Christmas tree with ornaments',
        skills: 'project management, HTML5, CSS, Grid'
      },

      {
        title: 'Art Departments at the Met',
        image: 'img/JPEG/restfulAPI.jpg',
        altText: 'image of framed titles',
        link: 'https://github.com/lyrictraveler/PFTW21/tree/main/wk10/art',
        skills: 'JavaScript, Restful APIs, Flex',
        description: 'Project for Web Development',
        id: 2009
      },
      {
        title: 'A Handy Calculator',
        image: 'img/JPEG/calculator.jpg',
        altText: 'image of simple calculator',
        link: 'https://plnkr.co/plunk/coD7LJUt9e6CVXci',
        skills: 'JavaScript, Vue',
        description: 'Project for Web Development',
        id: 2009
      },
      {
        title: 'Digital Piano',
        image: 'img/JPEG/keyboard.jpg',
        altText: 'colorful xylophone',
        link: 'https://github.com/lyrictraveler/PFTW21/tree/main/wk12/piano',
        skills: 'Sounds with JavaScript',
        description: 'Project for Web Development',
        id: 2009
      }
    ]
  }
});

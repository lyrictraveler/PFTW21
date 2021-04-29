Vue.component("portfolio-component", {
  template: `<tr class="items-container" v-cloak>
              <td class="cell"><a v-bind:href="link"><img v-bind:src="image" v-bind:alt="altText" class="photo"></a></td>
              <td class="cell">{{title}}</td>
              <td class="cell">{{skills}}</td>
              <td class="cell__description">{{description}}</td>
              <td></td>
            </tr>`,
  props: ["image", "altText", "link", "title", "skills", "description"],
});


const portfolioArray = [
  {
    image: "img/wrfwebsite.jpeg",
    altText: "website of West Richmond Friends Meeting",
    link: 'https://www.westrichmondfriends.org/',
    title: "Church Website",
    skills: 'project management, interpersonal communication, testing and debugging',
    description:
      "Website designed for West Richmond Friends Meeting (Quakers), Richmond, IN.",
    id: 2020
  },
  {
    image: "img/99invisible.png",
    altText: "eerie photo with bilingual text in English and Esperanto", 
    link: "https://docs.google.com/presentation/d/1w5BmH99gTMSc-HOqhEv1WsXYV2P9yjisVL5ACEM3zFM/present?usp=sharing",
    title: "10.000 Jaroj: Epizodo 114 de 99% Nevidebla",
    skills: "project management, research, GoogleSuite",
    description: "Response to Design in Context Challenge",
    id: 2009
  },
  {
    image: "img/noisyscreen.png",
    altText: "broken glass with disruptive words", 
    link: "https://www.youtube.com/watch?v=QHSu7Vqz34A",
    title: "My Design Practice",
    skills: "design thinking",
    description: "Final Project for Design in Context",
    id: 2009
  },
  {
    image: "img/FCNL clone.png",
    altText: "clone of FCNL website",
    link: 'https://github.com/lyrictraveler/fcnl_case_study',
    title: "Case Study / Cloned Website",
    skills: 'HTML5, CSS, BMI, Grid, Flex',
    description:
      "Final project for Web Development course",
    id: 2020,
  },
  {
    image: "img/CUCCSblog.png",
    altText: "images of people and lines from blog", 
    link: "https://www.cuccs.org/blog/categories/interviews",
    title: "Chautauqua UCC Society Website",
    skills: "blogging, Constant Contact",
    description: "Blog created and website maintained for Chautauqua United Church of Christ Society",
    id: 2009
  },
  {
    image: "img/holidayparty.png",
    altText: "Christmas tree with ornaments", 
    link: "https://lyrictraveler.github.io/wrfnew_party2020/",
    title: "Holiday Party",
    skills: "project management, HTML, CSS",
    description: "game developed for friendly holiday party on Zoom",
    id: 2009
  },
  {
    image: "img/calculator.png",
    altText: "image of simple calculator", 
    link: "https://plnkr.co/plunk/coD7LJUt9e6CVXci",
    title: "A Handy Calculator",
    skills: "JavaScript, Vue",
    description: "Project for Web Development",
    id: 2009
  },
  {
    image: "img/restfulAPI.png",
    altText: "image of framed titles", 
    link: "https://github.com/lyrictraveler/PFTW21/tree/main/wk10/art",
    title: "Art Departments at the Met",
    skills: "JavaScript, Restful APIs",
    description: "Project for Web Development",
    id: 2009
  },
  {
    image: "img/keyboard.png",
    altText: "colorful xylophone", 
    link: "https://github.com/lyrictraveler/PFTW21/tree/main/wk12/piano",
    title: "Play a Song",
    skills: "loading sounds with JavaScript",
    description: "Project for Web Development",
    id: 2009
  },
];


var vm = new Vue({
  el: "#items-list",
  data: {
    items: portfolioArray,
    imageInput: "",
    titleInput: "",
    skillsInput: "",
    descriptionInput: "",
    urlInput:'',
    idInput: "",
  },
  methods: {

    addItem: function (e) {
      e.preventDefault();
      const newItem = {
        image: this.imageInput,
        title: this.titleInput,
        skills: this.skillsInput,
        description: this.descriptionInput,
        linkInput: this.linkInput,
        id: this.idInput
      };
      this.items.push(newItem);
      this.typeInput = this.locationInput = this.dateInput = this.idInput = '';
    }
  }
});


Vue.component("portfolio-component", {
  template: `<tr class="items-container" v-cloak>
              <td class="cell"><img v-bind:src="image" class="photo"></td>
              <td class="cell">{{title}}</td>
              <td class="cell">{{year}}</td>
              <td class="cell">{{format}}</td>
              <td class="cell__description">{{description}}</td>
              <td></td>
            </tr>`,
  props: ["image", "title", "year", "format", "description"],
});

/* const russianDollsArray = [
  {
    image: 'img/sovietdoll.jpg',
    name: 'Soviet',
    acquired: 1984,
    count: 9,
    isArtisan: false,
    description:
      'Nesting dolls mass-produced in the USSR for tourist purchases in hard currency. Poor quality stencil design in primary colors.',
    id: 1
  },

  {
    image: 'img/oniondomedoll.jpg',
    name: 'Blue Nun',
    acquired: 1989,
    count: 5,
    isArtisan: true,
    description:
      "Early glasnost' era hand-painted monochromatic nesting dolls featuring Russian Orthodox onion-dome church on each doll's apron.",
    id: 2
  },
  {
    image: 'img/malevichdoll.jpg',
    name: 'Malevich',
    acquired: 1990,
    count: 5,
    isArtisan: true,
    description:
      'Museum-quality post-Soviet hand-painted nesting dolls in style of avant-garde artist Kazimir Malevich.',
    id: 3
  },
  {
    image: 'img/fairytaledoll.jpg',
    name: 'Firebird',
    acquired: 1994,
    count: 5,
    isArtisan: true,
    description:
      'Intricately hand-decorated nesting dolls decorated with gold leaf and representing scenes from a traditional Russian folk tale.',
    id: 4
  },
  {
    image: 'img/putindoll.jpg',
    name: 'Putin',
    acquired: 2000,
    count: 10,
    isArtisan: false,
    description:
      'Mass-produced in post-Soviet factory for tourist consumption. Large example in genre of political nesting dolls. From largest to smallest, dolls represent Putin, Yeltsin, Gorbachev, Brezhnev, Khrushchev, Stalin, Lenin, Marx, Engels, and Ivan the Terrible.',
    id: 5
  }
];
 */
const portfolioArray = [

  {
    image: "https://images.app.goo.gl/oRsun6mkGx6G6zyu9",
    title: "Things of Beauty",
    year: 2009,
    format: "essay",
    description:
      "The genesis of my journey from college professor of International Relations to graduate student in art school begins with this essay.",
    url:'',
    id: 1,
  },

  {
    image: "img/crownofbullets300x400.jpg",
    title: "New Directions Grant Report",
    year: 2013,
    format: "report",
    description:
      "This report documents my initial experiments in an art studio and the implications for pedagogy and my developing interest in emotional cognition.",
    url: '',
    id: 2,
  },


  {
    image: "img/Swords-into-Plowshares300x270.jpg",

    title: "Art Transforming Violence",
    year: 2018,
    format: "interview",
    description:
      "This interview about my pop up show on Capitol Hill explains why I make art as a policy-relevant response to gun violence.",
    url: '',
    id: 3,
  },

  {
    image: "img/wrfwebsite.jpeg",
    title: "West Richmond Friends Meeting Website",
    year: 2020,
    format: "website",
    description:
      "Website designed for West Richmond Friends Meeting (Quakers), Richmond, IN.",
    url: '',
    id: 3,
  },
  
];

/* var vm = new Vue({
  el: '#dolls-list',
  data: {
    dolls: russianDollsArray,
    imageInput: '',
    nameInput: '',
    acquiredInput: '',
    isArtisan: '',
    descriptionInput: '',
    countInput: '',
    idInput: ''
  }, */

var vm = new Vue({
  el: "#items-list",
  data: {
    items: portfolioArray,
    imageInput: "",
    titleInput: "",
    yearInput: "",
    //    isArtisan: '',//
    descriptionInput: "",
    formatInput: "",
    urlInput:'',
    idInput: "",
  },
  methods: {

    addItem: function (e) {
      e.preventDefault();
      const newItem = {
        image: this.imageInput,
        title: this.titleInput,
        year: this.yearInput,
        format: this.formatInput,
        //isArtisan: this.isArtisanInput,
        description: this.descriptionInput,
        id: this.idInput
      };
      this.items.push(newItem);
      this.typeInput = this.locationInput = this.dateInput = this.idInput = '';
    }
  }
});


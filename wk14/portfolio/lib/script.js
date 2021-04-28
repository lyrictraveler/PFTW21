
Vue.component('blog-post', {
/*   template: `<tr class="item-container" v-cloak>
              <td class="cell"><img v-bind:src="image" class="photo"></td>
              <td class="cell">{{name}}</td>
              <td class="cell">{{year}}</td>
              <td class="cell">{{format}}}</td>
              <td class="cell__description">{{description}}</td>
              <td></td>
            </tr>`, */
  props: ['image', 'title', 'year', 'medium', 'description']
  template: '<h3>{{ title }}</h3>'
});

const portfolioArray = {
  {
    image: '',
    title: 'New Directions Grant Report',
    year: 2013,
    format: 'report',
    description: 'This report documents my initial experiments in an art studio and the implications for pedagogy and my developing interest in emotional cognition.',
    id: 2
  },

  {
    image: '',
    title: 'Things of Beauty',
    year: 2009,
    format: 'essay',
    description: 'The genesis of my journey from college professor of International Relations to graduate student in art school begins with this essay.',
    id: 1
  },

  {
    image: '',
    title: 'Art Transforming Violence',
    year: 2018,
    format: 'interview',
    description: 'This interview about my pop up show on Capitol Hill explains why I make art as a policy-relevant response to gun violence.',
    id: 
  }
};

var vm = new Vue({
  el: '#app',
  data: {
    //I'd like to include an image with these posts.
    posts: [
      { id: 1, title: 'Things of Beauty', year: 2009, format: 'print essay', description: 'The genesis of my journey from college professor of International Relations to graduate student in art school begins with this essay' },
      { id: 2, title: 'New Directions Grant Report', year: 2013, format: 'online report', description: 'This report documents my initial experiments in an art studio and the implications for pedagogy and my developing interest in emotional cognition.'},
      { id: 3, title: 'Art Transforming Violence', year: 2018,
      format: 'interview', description: 'This interview about my pop up show on Capitol Hill explains why I make art as a policy-relevant response to gun violence.', image: },
    ]
  },
  methods: {

    addItem: function (e) {
      e.preventDefault();
      const newItem = {
        image: this.imageInput,
        name: this.nameInput,
        year: this.yearInput,
        format: this.formatInput,
        description: this.descriptionInput,
        id: this.idInput
      };
      this.items.push(newItem);
      this.typeInput = this.locationInput = this.dateInput = this.idInput = '';
    }
  }
})

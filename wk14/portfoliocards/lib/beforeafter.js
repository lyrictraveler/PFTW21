Vue.component('beforeafter-component', {
  template: `<div class="beforeafter-container v-cloak">
                <h2 class="project-title">{{title}}</h2>
                <div class="image">
                  <img v-bind:src="image" v-bind:alt="image-alt"/>
                </div>
                <div class="content">
            </div>`,

  props: ['title', 'image', 'imageAlt']
});

var vm = new Vue({
  el: '#card',
  data: {
    items: [
      {
        title: 'Before',
        image: 'img/nor_misery.jpeg',
        imageAlt: 'woman with head in her hands'
      },
      {
        title: 'After',
        image: 'img/nor_hppiness.jpeg',
        imageAlt: 'curious woman'
      },
      {
        title: 'Before',
        image: 'img/Bob_shakesfist.jpg',
        imageAlt: 'shocked man'
      },
      {
        title: 'After',
        image: 'img/Bob_happy.jpg',
        imageAlt: 'man content'
      }
    ]
  }
});

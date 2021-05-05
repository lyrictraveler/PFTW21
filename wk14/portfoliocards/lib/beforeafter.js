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
        image: 'img/JPEG/nor_misery.jpg',
        imageAlt: 'woman with head in her hands'
      },
      {
        title: 'After',
        image: 'img/JPEG/nor_hppiness.jpg',
        imageAlt: 'curious woman'
      },
      {
        title: 'Before',
        image: 'img/JPEG/Bob_shakesfist.jpg',
        imageAlt: 'shocked man'
      },
      {
        title: 'After',
        image: 'img/JPEG/Bob_happy.jpg',
        imageAlt: 'man content'
      }
    ]
  }
});

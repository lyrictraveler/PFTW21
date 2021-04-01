Vue.component('bike-hub', {
  template: `<div :class="['store']">
        <h3>{{track.title}}</h3>
        <div><img v-bind:src="track.cover" alt=""></div>
        <small>{{track.artist}}</small>
        </bike-hub>`,
  props: ['track'],

 /*computed: {
    trending: function () {
      const delta = this.track.rank - this.track.position.positionLastWeek;
      if (delta > 0) {
        return 'up';
      } else if (delta < 0) {
        return 'down';
      } else {
        return 'no-change';
      }
    }
  }*/
});

const vm = new Vue({
  el: '#citybikeApp',
  data: {
    tracks: []
  },
  mounted () {
    axios.get('./data/bikes.json').then((response) => {
      console.log('response', response);
      vm.name = response.data;
      console.log(vm.name);
    });
  }
})

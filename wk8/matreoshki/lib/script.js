const russianDollsArray = [
          {
            image: "img/sovietdoll.jpg",
            name: "Soviet",
            acquired: 1984,
            count: 9,
            isArtisan: false,
            description: "Nesting dolls mass-produced in the USSR for tourist purchases in hard currency. Poor quality stencil design in primary colors.",
            id: 1
          },

          {
            image: "img/oniondomedoll.jpg",
            name: "Blue Nun",
            acquired: 1989,
            count: 5,
            isArtisan: true,
            description: "Early glasnost' era hand-painted monochromatic nesting dolls featuring Russian Orthodox onion-dome church on each doll's apron.",
            id: 2
          },
          {
            image: "img/malevichdoll.jpg",
            name: "Malevich",
            acquired: 1990,
            count: 5,
            isArtisan: true,
            description: "Museum-quality post-Soviet hand-painted nesting dolls in style of avant-garde artist Kazimir Malevich.",
            id: 3
          }, 
          {
            image: "img/fairytaledoll.jpg",
            name: "Firebird",
            acquired: 1994,
            count: 5,
            isArtisan: true,
            description: "Intricately hand-decorated nesting dolls decorated with gold leaf and representing scenes from a traditional Russian folk tale.",
            id: 4
          }, 
          {
            image: "img/putindoll.jpg",
            name: "Putin",
            acquired: 2000,
            count: 10,
            isArtisan: false,
            description: "Mass-produced in post-Soviet factory for tourist consumption. Large example in genre of political nesting dolls. From largest to smallest, dolls represent Putin, Yeltsin, Gorbachev, Brezhnev, Khrushchev, Stalin, Lenin, Marx, Engels, and Ivan the Terrible.",
            id: 5
          }, 
        ];

  var vm = new Vue({
  el: "#dolls-list",
  data: {
    dolls: russianDollsArray
  },
  methods: {
    deleteLight: function (dollObject) {
      this.dollss = this.dolls.filter(function(doll){
        if (doll.id !== dollObject.id) {
          return true;
        } else {
          return false;
        }
      })
    },
    addDoll: function () {
      let newDoll = {
        image: this.imageInput,
        name: this.nameInput,
        acquired: this.acquiredInput,
        count: this.countInput,
        isArtisan: this.isArtisanInput,
        description: this.descriptionInput,
        id: this.idInput
      };
      this.dolls.push(newDoll);
      this.typeInput = this.locationInput = this.dateInput = this.idInput = '';
    }
  }
});



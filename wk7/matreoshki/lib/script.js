const russianDollsArray = [
          {
            image: "img/sovietdoll.jpg",
            name: "Soviet",
            acquired: 1984,
            count: 9,
            isArtisan: false,
            description: "Nesting dolls mass-produced in the USSR for tourist purchases in hard currency. Poor quality stencil design in primary colors."
          },

          {
            image: "img/oniondomedoll.jpg",
            name: "Blue Nun",
            acquired: 1989,
            count: 5,
            isArtisan: true,
            description: "Early glasnost' era hand-painted monochromatic nesting dolls featuring Russian Orthodox onion-dome church on each doll's apron."
          },
          {
            image: "img/malevichdoll.jpg",
            name: "Malevich",
            acquired: 1990,
            count: 5,
            isArtisan: true,
            description: "Museum-quality post-Soviet hand-painted nesting dolls in style of avant-garde artist Kazimir Malevich."
          }, 
          {
            image: "img/fairytaledoll.jpg",
            name: "Firebird",
            acquired: 1994,
            count: 5,
            isArtisan: true,
            description: "Intricately hand-decorated nesting dolls decorated with gold leaf and representing scenes from a traditional Russian folk tale."
          }, 
          {
            image: "img/putindoll.jpg",
            name: "Putin",
            acquired: 2000,
            count: 10,
            isArtisan: false,
            description: "Mass-produced in post-Soviet factory for tourist consumption. Large example in genre of political nesting dolls. From largest to smallest, dolls represent Putin, Yeltsin, Gorbachev, Brezhnev, Khrushchev, Stalin, Lenin, Marx, Engels, and Ivan the Terrible."
          }, 
        ];

  var vm = new Vue({
  el: "#dolls-list",
  data: {
    dolls: russianDollsArray
  }
})



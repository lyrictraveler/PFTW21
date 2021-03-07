const russianDollsArray = [
          {
            name: "Soviet",
            acquired: 1984,
            count: 9,
            artisan: false,
            description: "Mass-produced in Soviet for tourist consumption. Poor quality stencil design in primary colors."
          },
          {
            name: "Putin",
            acquired: 2000,
            count: 10,
            artisan: false,
            description: "Mass-produced in post-Soviet factory for tourist consumption. Large example in genre of political nesting dolls. From largest to smallest, dolls represent Putin, Yeltsin, Gorbachev, Brezhnev, Khrushchev, Stalin, Lenin, Marx, Engels, and Ivan the Terrible."
          }, 
          {
            name: "Blue Nun",
            acquired: 1989,
            count: 5,
            artisan: true,
            description: "Early post-Soviet hand-painted monochromatic nesting dolls featuring Russian Orthodox onion-dome church on each doll's apron."
          },
          {
            name: "Malevich",
            acquired: 1990,
            count: 5,
            artisan: true,
            description: "Post-Soviet hand-painted nesting dolls in style of artist Kazimir Malevich."
          }, 
          {
            name: "Firebird",
            acquired: 1994,
            count: 5,
            artisan: true,
            description: "Elaborate hand-painted dolls with gold leaf representing scenes from a traditional Russian folk tale."
          },  
        ];

  var vm = new Vue({
  el: "#dolls-list",
  data: {
    dolls: russianDollsArray
  }
})



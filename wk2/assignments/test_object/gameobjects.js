const games = window.prompt(
  "I have four favorite games in my collection. Pick a number between 1 and 4, and I'll tell you about that game!"
);

const myGames = [
  {
    game: "Scrabble",
    type: "board",
    players: "2 or more",
    shortDescription: "a wordy word game for nerds.",
  },

  {
    game: "baseball",
    type: "ball",
    players: "9 per team",
    shortDescription: "the all-American pastime.",
  },

  {
    game: "chess",
    type: "strategy",
    players: "two",
    shortDescription: "currently featured in a Netflix mini-series.",
  },

  {
    game: "Cooking Fever",
    type: "computer",
    players: "single",
    shortDescription: "a way to cook at many restaurants during a pandemic.",
  },
];

console.log(myGames);


window.alert(
"You selected " +
      myGames[games - 1].game +
      ", which is a " +
      myGames[games - 1].players +
      " player game" +
      " and is played using a " +
      myGames[games - 1].type +
      ". It is " +
      myGames[games - 1].shortDescription
);

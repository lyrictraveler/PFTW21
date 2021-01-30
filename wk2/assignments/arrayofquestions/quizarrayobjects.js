const myQuestions = [
  {
    question: 'What is the meaning of life? ',
    answer: '42'
  },

  {
    question: 'Knock Knock',
    answer: "Who's there?"
  },

  {
    question: 'Rumpelstiltskin is to Rapunzel as ______________ is to ____________________',
    answer: 'Rumsfeld is to Rachmaninoff'
  }
];

console.log(myQuestions);

const randomNumber = Math.round(Math.random() * (myQuestions.length - 1));

console.log(randomNumber);

const quizAnswer = window.prompt(myQuestions[randomNumber].question);

console.log(quizAnswer);

window.alert('You answered ' + quizAnswer);

window.alert('The correct answer is ' + myQuestions[randomNumber].answer);

let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
  { question: '1 + 1 =', answer: '2' },

  { question: '7 x 7 =', answer: '49' },

  { question: '3 - 3 =', answer: '0' },

  { question: '100  - 99 =', answer: '1' },

  { question: '35 + 5 =', answer: '40' }
];

function next() {
    if (statements.length < 1) {
        alert('Arithmetic Wiz!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
}

function checkQuestions() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementsObj.answer});

        response = 'Good job! Next question:';
        responseColor = green;
    } else {
        response = 'Sorry, wrong number.';
        responseColor = 'red';
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
} 
currentQuestion = next();
let message = currentQuestion.question;

function setup () {
        createCanvas(800, 600);

}

function draw() {
    background('violet');
    textSize(28);
    fill('black');
    text(message, 100, 400);
}
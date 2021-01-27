const myArr = [
  'A Fish Called Wanda',
  'Dr. Strangelove',
  'Shakespeare In Love',
  'The King of Hearts',
  'Dick'
];
console.log(myArr);

const title = window.prompt('What is your favorite movie?');
console.log(title);

myArr.push(title);

console.log(myArr.toString());

window.alert(myArr)
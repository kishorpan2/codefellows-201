'use strict';
do {
  var answer = prompt('My name is Tom (Yes/No)?');
  answer = answer.toLowerCase();
}while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');


if (answer ==='yes'||answer==='y') {
  alert('we have the same name');}
else {alert('Welcome to the game');}
console.log( 'what is my name?');
do {
  answer = prompt('I live in Seattle (Yes/No)?');
  answer = answer.toLowerCase();
}while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');


if (answer ==='yes'||answer==='y') {
  alert('we live in different place');

}else {
  alert('I might know where that is');
}
console.log( 'where do I live?');
do {
  answer = prompt('I eat sandwich(Yes/No)?');
  answer = answer.toLowerCase();
}while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');


if (answer ==='yes'||answer==='y') {
  alert('That is right');} else {
  alert('Good guess');
}
console.log( 'what do I eat?');
do {
  answer = prompt('I study in Seattle (Yes/No)?');
  answer = answer.toLowerCase();
}while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');


if (answer ==='yes'||answer==='y') {
  alert('Its a nice place to study');
}else {
  alert('which city do I study?');
}
console.log( 'where do I study?');
do {
  answer = prompt('I commute by train (Yes/No)?');
  answer = answer.toLowerCase();
}while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');


if (answer ==='yes'||answer==='y') {
  alert('Thats a nice way to travel');
}else {
  alert('try travellin train');
}
console.log( 'how do I travel?');
var questionArray = [ 'whats my lucky number', 'what was my score on a quiz','how many miles do I travel everyday?', 'what is the passing score?'];
var count = 2;
var isCorrect =0;
alert('now lets play first guessing game! You get few tries');
do {
  var userNumber = prompt(questionArray[0]);
  if (userNumber > 50){
    alert( 'Aim high!!');
  }
  else if (userNumber < 50){
    alert('Too low');
  }
  else {
    alert('Thats right!!');
    isCorrect = 1;
  }
  count--;
}while(count !== 0 && isCorrect ===0);
alert(' now lets play aother guessing game! You get many tries');
do {
  userNumber = prompt(questionArray[3]);
  if (userNumber > 70){
    alert( 'Keep it up');
  }
  else if (userNumber < 70){
    alert('Study Hard');
  }
  else {
    alert('You Passed!!');
    isCorrect = 1;
  }
  count--;
}while(count !== 0 && isCorrect ===0);



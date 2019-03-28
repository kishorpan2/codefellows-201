'use strict';
//global variables
var count = 2;
var isCorrect =0;
var questionArray = [ 'whats my lucky number', 'what was my score on a quiz','how many miles do I travel everyday?', 'what is the passing score?'];

// document.addEventListener('DOMContentLoaded', start);

function start() {
  // do {
  //   var answer = prompt('My name is Tom (Yes/No)?');
  //   answer = answer.toLowerCase();
  // }while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');

  // if (answer ==='yes'||answer==='y') {
  //   alert('we have the same name');}
  // else {alert('Welcome to the game');}
  // console.log( 'what is my name?');
  // do {
  //   answer = prompt('I live in Seattle (Yes/No)?');
  //   answer = answer.toLowerCase();
  // }while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');

  // if (answer ==='yes'||answer==='y') {
  //   alert('we live in different place');

  // }else {
  //   alert('I might know where that is');
  // }
  // console.log( 'where do I live?');
  // do {
  //   answer = prompt('I eat sandwich(Yes/No)?');
  //   answer = answer.toLowerCase();
  // }while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');

  // if (answer ==='yes'||answer==='y') {
  //   alert('That is right');} else {
  //   alert('Good guess');
  // }
  // console.log( 'what do I eat?');
  // do {
  //   answer = prompt('I study in Seattle (Yes/No)?');
  //   answer = answer.toLowerCase();
  // }while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');

  // if (answer ==='yes'||answer==='y') {
  //   alert('Its a nice place to study');
  // }else {
  //   alert('which city do I study?');
  // }
  // console.log( 'where do I study?');
  // do {
  //   answer = prompt('I commute by train (Yes/No)?');
  //   answer = answer.toLowerCase();
  // }while(answer !=='y'&& answer!=='n'&&answer!=='yes'&&answer!=='no');

  // if (answer ==='yes'||answer==='y') {
  //   alert('Thats a nice way to travel');
  // }else {
  //   alert('try travellin train');
  // }
  // console.log( 'how do I travel?');

  //gotta figure out how to handle empty inputs for questions 6 and 7
  alert('now lets play first guessing game! You get few tries');
  var userNumber = prompt(questionArray[0]);
  while(isNaN(userNumber)){
    userNumber = prompt(questionArray[0]);
  }
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
  alert(' now lets play another guessing game! You get many tries');
  while(isNaN(userNumber)){
    userNumber = prompt(questionArray[3]);
  }
  if (userNumber > 70){
    alert( 'Keep it up');
    userNumber = prompt(questionArray[3]);
  } else if (userNumber < 70){
    alert('Study Hard');
    userNumber = prompt(questionArray[3]);
  } else {
    alert('You Passed!!');
    isCorrect = 1;
  }
  count--;
}

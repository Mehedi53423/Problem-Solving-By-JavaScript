const prompt = require("prompt-sync")({ sigint: true });

var subject = ["Mathematics", "Biology", "Chemistry", "Physics", "Bangla"];
var number = [];
var n = 0;

for (var i = 0; i < subject.length; i++) {
  number[i] = prompt(subject[i] + " : ");
  n = n + parseFloat(number[i]);
}

console.log("The Average Marks Is : " + (n / subject.length).toFixed(2));

const prompt = require("prompt-sync")({ sigint: true });

var number = prompt("The Number : ");

console.log("The Rmainder Is : " + (parseInt(number) % 5));

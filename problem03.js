const prompt = require("prompt-sync")({ sigint: true });

var firstString = prompt("The First String : ");
var secString = prompt("The Second String : ");

console.log(firstString + " " + secString);

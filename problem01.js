const prompt = require("prompt-sync")({ sigint: true });

var money = prompt("Given Money : ");
var price = prompt("The Cost Of 1 KG Of Oranges & 1 KG Of Apples : ");

console.log(
  "The Shopkeeper Will Return : " + (parseInt(money) - parseInt(price))
);

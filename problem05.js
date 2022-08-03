var fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana"));

fruits[fruits.indexOf("Banana")] = "Mango";

fruits.pop();

fruits.push("Watermelon");

console.log(fruits);

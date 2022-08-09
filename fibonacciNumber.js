const prompt = require("prompt-sync")({ sigint: true });

function fib(n) {
  if (n == 1) {
    return 0;
  } else if (n == 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

const n = parseInt(prompt("Element Number Of Fibonacci Serise : "));

console.log(n + "th Number Of Fibonacci Serise Is : " + fib(n));

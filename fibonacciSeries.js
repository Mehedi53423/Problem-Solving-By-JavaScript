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

const n = parseInt(prompt("How Many Elements : "));
let fibSeries = "";

for (let i = 1; i <= n; i++) {
  fibSeries = fibSeries + fib(i) + " ";
}

console.log(fibSeries);

var numbers = [13, 79, 45];
var largeNumber = numbers[0];

for (var i = 0; i < numbers.length - 1; i++) {
  if (largeNumber < numbers[i + 1]) {
    largeNumber = numbers[i + 1];
  }
}

console.log(largeNumber);

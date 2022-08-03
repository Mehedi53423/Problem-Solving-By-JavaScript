var names = ["my", "Tom", "Jane", "Peter", "John"];
var totalScores = [85, 66, 95, 56, 40];

for (var i = 0; i < names.length; i++) {
  if (totalScores[i] >= 80) {
    if (names[i] == "my") {
      console.log(names[i] + " Grade : A");
    } else {
      console.log(names[i] + "'s Grade : A");
    }
  } else if (totalScores[i] >= 60) {
    if (names[i] == "my") {
      console.log(names[i] + " Grade : B");
    } else {
      console.log(names[i] + "'s Grade : B");
    }
  } else if (totalScores[i] >= 50) {
    if (names[i] == "my") {
      console.log(names[i] + " Grade : C");
    } else {
      console.log(names[i] + "'s Grade : C");
    }
  } else if (totalScores[i] >= 40) {
    if (names[i] == "my") {
      console.log(names[i] + " Grade : D");
    } else {
      console.log(names[i] + "'s Grade : D");
    }
  } else {
    if (names[i] == "my") {
      console.log(names[i] + " Grade : F");
    } else {
      console.log(names[i] + "'s Grade : F");
    }
  }
}

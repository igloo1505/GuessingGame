var main = document.querySelectorAll("#mainTitle path");
console.log("connected");
console.log(main.length);

for (var i = 0; i < main.length; i++) {
  console.log(`letter ${i + 1} has a length of ${main[i].getTotalLength()}`);
}

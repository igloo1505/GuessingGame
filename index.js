var questions = [
  {
    question:
      "This Person said 'There is nothing more to be learned in physics' two years before Einstein wrote Special Relativity?",
    answer: "Kelvin"
  },
  {
    question: "Einstein's miracle year is known as?",
    answer: "Annus mirabilis"
  }
];

console.log(questions.length);
let Random = {};
const setQuestion = () => {
  Random = questions[Math.floor(Math.random() * questions.length)];
};
setQuestion();
const { question, answer } = Random;

var questionDocument = document.getElementById("question");
var answerDocument = document.getElementById("answer");

document.onkeydown = () => {
  //   alert("fix alignment of index page and commit");
  console.log(event.key);
};

console.log(answer.length);

questionDocument.innerHTML = question;

let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let word = "";
for (var i = 0; i < answer.length; i++) {
  if (alphabet.includes(answer[i])) {
    console.log("_");
    word = word += "_";
  } else if (answer[i] === " ") {
    word = word += " ";
  }
}
answerDocument.innerHTML = word;

var questions = [
  {
    question:
      "This Person said 'There is nothing more to be learned in physics' two years before Einstein wrote Special Relativity?",
    answer: "kelvin"
  },
  {
    question: "Einstein's miracle year is known as?",
    answer: "annus mirabilis"
  }
];

const setPlay = () => {
  console.log(questions.length);
  let Random = {};
  const setQuestion = () => {
    Random = questions[Math.floor(Math.random() * questions.length)];
  };
  setQuestion();
  const { question, answer } = Random;

  var questionDocument = document.getElementById("question");
  var answerDocument = document.getElementById("answer");
  var turnsDocument = document.getElementById("turns");
  var guessesDocument = document.getElementById("guesses");

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
  const setPlay = () => {
    guessed = [];
    guessedCorrectly = [];
    guessesRemaining = 10;
  };

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

  let guessed = [];
  let guessedCorrectly = [];
  let guessesRemaining = 10;

  document.onkeydown = () => {
    let key = event.key;
    // console.log("answer index" + answer.indexOf(key));
    if (alphabet.includes(key)) {
      if (answer.indexOf(key) === -1 && guessed.indexOf(key) === -1) {
        console.log("guessed" + guessed);
        guessed.push(key);
        guessesRemaining--;
        // console.log(guessesRemaining);
      } else if (
        answer.indexOf(key) !== -1 &&
        guessedCorrectly.indexOf(key) == -1
      ) {
        guessedCorrectly.push(key);
        let allIndexes = [];
        for (var i = 0; i < answer.length; i++) {
          if (answer[i] === key) {
            console.log("index is " + i);
            console.log("letter is " + answer[i]);
            word = word.replace(word[i], key);
            console.log(word);
            allIndexes.push(answer[i]);
          }
        }

        if (guessedCorrectly.length == answer.length) {
          alert("YAY! You're like Einstein");
          setPlay();
        }
      }

      turnsDocument.innerHTML = guessesRemaining;
      guessesDocument.innerHTML = guessed.join("");
    }
  };
};
setPlay();

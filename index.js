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
  const resetPlay = () => {
    guessed = [];
    guessedCorrectly = [];
    guessesRemaining = 10;
    setQuestion();
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
  let playing = true;
  let guessed = [];
  let guessedCorrectly = [];
  let guessesRemaining = 10;

  document.onkeydown = () => {
    console.log(answer.length);
    console.log(word.length);
    let key = event.key;
    // console.log("answer index" + answer.indexOf(key));
    if (alphabet.includes(key)) {
      if (answer.indexOf(key) === -1 && guessed.indexOf(key) === -1) {
        // console.log("guessed" + guessed);
        guessed.push(key);
        guessesRemaining--;
        if (guessesRemaining === 0) {
          word = answer;
          let again = confirm("try again?");
          console.log(again);
          if (again) {
            playing = false;
            setPlay();
          }
        }
      } else if (
        answer.indexOf(key) !== -1 &&
        guessedCorrectly.indexOf(key) == -1
      ) {
        guessedCorrectly.push(key);
        let newWord = "";
        for (var i = 0; i < answer.length; i++) {
          if (answer[i] === key) {
            newWord = newWord += answer[i];
          } else {
            newWord = newWord += word[i];
          }
          console.log(newWord);
          // word = newWord;
          // for (var p = 0; p < word.length; p++) {
          //   if (p !== i) {
          //     wordToArray.push(word[p]);
          //   } else {
          //     wordToArray.push(answer[i]);
          //   }
          //   console.log("array " + wordToArray);
          //   console.log("joined " + wordToArray.toString());
          // }
          // allIndexes.push(answer[i]);
          // word = wordToArray.toString();
        }
        word = newWord;
      }

      if (guessedCorrectly.length == answer.length) {
        alert("YAY! You're like Einstein");
        playing = false;
        setPlay();
      }
    }
    if (playing === true) {
      answerDocument.innerHTML = word;
      turnsDocument.innerHTML = guessesRemaining;
      guessesDocument.innerHTML = guessed.join("");
    }
    if (playing === false) {
      turnsDocument.innerHTML = 10;
      guessesDocument.innerHTML = "";
    }
  };
};

setPlay();

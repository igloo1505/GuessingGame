var questions = [
  {
    question:
      "This Person said 'There is nothing more to be learned in physics' two years before Einstein wrote Special Relativity?",
    answer: "kelvin"
  },
  {
    question: "Einstein's miracle year is known as?",
    answer: "annus mirabilis"
  },
  {
    question:
      "When a doctoral professor became skeptical of how a single student stood out to such a degree, this famous theoretical physicist almost never earned a Phd after he didn't understand how a battery works?",
    answer: "werner heisenberg"
  },
  {
    question:
      "This tiny animal that can survive in nearly every known environment on earth has NASA astrobiologists legitimately considering panspermia as a means for life on earth.",
    answer: "tardigrade"
  },
  {
    question:
      "The greatest mystery in all of Physics, and likely all of science, the wave function collapse has an accurate probability function named after this physicist.",
    answer: "schrodinger"
  },
  {
    question:
      "In 1915, Einstein used this concept to prove that the mass of the sun bended space itself by effecting a massless photon traveling past.",
    answer: "gravitational lensing"
  },
  {
    question:
      "Although the numerical value varies between observation and theory, this value was derived from Einstein himself which he later called 'his greatest blunder'",
    answer: "cosmological constant"
  }
];
let lossInput = [
  {
    input:
      "It's ok. Schrodinger couldn't figure out how to get his cat out of a box."
  },
  {
    input:
      "Einstein's IQ is estimated at around 158. He also married his cousin. Don't feel so bad."
  },
  {
    input: "Don't worry. Heisenberg was uncertain about a lot of things."
  }
];

const setPlay = () => {
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
  var winAlert = document.getElementById("winAlert");
  var lossText = document.getElementById("lossText");
  var lossAlert = document.getElementById("lossAlert");

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
    playing = true;
    correctCount = 0;
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
  let correctCount = 0;
  let guessed = [];
  let guessedCorrectly = [];
  let guessesRemaining = 10;

  document.onkeydown = () => {
    let key = event.key;

    //!! SIMULATE LOSS OR WIN FOR DEVELOPMENT ONLY
    if (key === "x") {
      lossText.innerHTML =
        lossInput[Math.floor(Math.random() * lossInput.length)].input;
      lossAlert.classList.add("alert");
      lossAlert.classList.add("alert-danger");
    }

    if (alphabet.includes(key)) {
      if (answer.indexOf(key) === -1 && guessed.indexOf(key) === -1) {
        guessed.push(key);
        guessesRemaining--;
        if (guessesRemaining === 0) {
          word = answer;
          lossAlert.innerHTML =
            lossInput[Math.floor(Math.random() * lossInput.length)].input;
          lossAlert.classList.add("alert");
          lossAlert.classList.add("alert-danger");
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
            correctCount++;
          } else {
            newWord = newWord += word[i];
          }
          console.log(newWord);
        }
        word = newWord;
      }
      let Length = 0;
      for (var trueLength = 0; trueLength < answer.length; trueLength++) {
        if (answer[trueLength] !== " ") {
          Length++;
        }
      }
      console.log("correct " + correctCount);
      console.log("length" + Length);
      console.log("guessedCorrectly" + guessedCorrectly);

      if (correctCount === Length) {
        // alert("YAY! You're like Einstein");
        console.log("classes should be added here");
        winAlert.classList.add("alert");
        winAlert.classList.add("alert-success");

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

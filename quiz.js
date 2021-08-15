function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
            <input id="radio" type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label><br>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${questionNumber + 1}:${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  console.log(output)
  quizContainer.innerHTML = output;
}

function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "green";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const myQuestions = [
  {
    question:
      "A right triangle, ABC, is given, where angle B = 90 degrees. The side AB is extended past angle B to form an exterior angle, X. What is the measure in degrees of angle X?",
    answers: {
      a: "135 degrees",
      b: "256 degrees",
      c: "45 degrees",
      d: "90 degrees",
    },
    correctAnswer: "d",
  },
  {
    question:
      "There is a triangle XYZ where XY is perpendicular to YZ and angle X = 70 degrees. What is the measure of angle Z?",
    answers: {
      a: "130 degrees",
      b: "20 degrees",
      c: "110 degrees",
      d: "30 degrees",
    },
    correctAnswer: "b",
  },
  {
    question:
      "There is a right triangle PQR where: angle Q = 90 degrees; angle P = angle R. What is the measure of angles P and R?",
    answers: {
      a: "45 degrees",
      b: "60 degrees",
      c: "65 degrees",
      d: "75 degrees",
    },
    correctAnswer: "a",
  },
  {
    question:
      "The Pythagorean Theorem states that:The square of the hypotenuse of a right angle triangle is equal to the sum of the squares of the other two sides.This means that, in a right triangle ABC with hypotenuse AC:",
    answers: {
      a: "AB * AC = BC^2",
      b: "(AB + BC) (AB - BC) = AC^2",
      c: "(AB + AC)^2 = BC^2",
      d: "AB^2 + BC^2 = AC^2",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Out of the following triangles, which is *NOT* a right triangle?",
    answers: {
      a: "Triangle LMN, where LM = 5, MN = 12 and NL = 13",
      b: "Triangle ABC, where AB = 10, BC = 24 and CA = 26",
      c: "Triangle PQR, where PQ = 6, QR = 15 and RP = 16",
      d: "Triangle XYZ, where XY = 3, YZ = 4 and ZX = 5",
    },
    correctAnswer: "a",
  },
];

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);


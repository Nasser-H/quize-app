import { Quiz } from "./quiz.js";
const categoryMenu = document.getElementById("categoryMenu");
const difficultyOptions = document.getElementById("difficultyOptions");
const questionsNumber = document.getElementById("questionsNumber");
const startQuiz = document.getElementById("startQuiz");
startQuiz.addEventListener("click", () => {
  const quiz = new Quiz(
    questionsNumber.value,
    categoryMenu.value,
    difficultyOptions.value
  );
  quiz.getQuestions();
});

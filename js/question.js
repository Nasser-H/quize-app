export class Questions {
  constructor() {
    this.index = 0;
    this.score = 0;
  }
  disPlayQuestions(questions) {
    let question = questions[this.index];
    let choices = [
      question.correct_answer,
      ...question.incorrect_answers,
    ].sort();
    document.getElementById("quizOptions").classList.add("d-none");
    let box = `
            <div class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn">
          <div class="w-100 d-flex justify-content-between">
            <span class="btn btn-category">${question.category}</span>
            <span class="fs-6 btn btn-questions">
            ${this.index + 1} of ${questions.length} Questions</span>
          </div>
          <h2 class="text-capitalize h4 text-center">${question.question}</h2>
          <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
          ${choices.map((x) => `<li>${x}</li>`).join(" ")}
          </ul>
          <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score: ${
            this.score
          }
          </h2>
        </div>
    `;
    document.getElementById("questions").innerHTML = box;
    const answers = document.querySelectorAll(".choices li");
    answers.forEach((li) => {
      li.addEventListener("click", (e) => {
        this.checkAnswer(e.target, question.correct_answer, questions);
      });
    });
  }
  checkAnswer(answer, correct_answer, questions) {
    if (answer.innerHTML == correct_answer) {
      answer.classList.add("correct");
      this.score++;
      setTimeout(() => {
        this.nextQuestion(questions);
      }, 700);
    } else {
      answer.classList.add("wrong");
      setTimeout(() => {
        this.nextQuestion(questions);
      }, 700);
    }
  }
  nextQuestion(questions) {
    document
      .querySelector(".question")
      .classList.replace("animate__bounceIn", "animate__zoomOutDown");
    this.index++;
    if (this.index < questions.length) {
      setTimeout(() => {
        this.disPlayQuestions(questions);
      }, 700);
    } else {
      let box = `
          <div id="tryAgainContainer" class="text-center text-white">
            <h1>Your Score is <span>${this.score}</span></h1>
            <button class="btn btn-danger" id="tryAgain">Try Again</button>
          </div>
          `;
      document.querySelector(".question").classList.add("d-none");
      document.getElementById("questionsContainer").innerHTML = box;
      document.getElementById("tryAgain").addEventListener("click", () => {
        window.location.reload();
      });
    }
  }
}

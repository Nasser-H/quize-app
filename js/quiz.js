import { Questions } from "./question.js";

export class Quiz {
  constructor(amount, category, difficulty) {
    this.amount = amount;
    this.category = category;
    this.difficulty = difficulty;
    this.questions = new Questions();
  }
  async getQuestions() {
    let api = await fetch(
      `https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}&type=multiple`
    );
    const response = await api.json();
    const questions = response.results;
    this.questions.disPlayQuestions(questions);
  }
}

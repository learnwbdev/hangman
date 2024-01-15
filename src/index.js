import "./sass/style.scss";
import { getQuestionsWithIds } from "./scripts/questions/getQuestionsWithIds";
import { getRandomQuestion } from "./scripts/questions/getRandomQuestion";
import "./scripts/html-structure/createHtmlStructure";

const questions = getQuestionsWithIds();
const randomQuestion = getRandomQuestion(questions);

console.log(
  `Answer: ${randomQuestion.answer.toUpperCase().split("").join(" ")}`
);

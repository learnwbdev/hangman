import "./sass/style.scss";
import { getQuestionsWithIds } from "./scripts/questions/getQuestionsWithIds";
import { createHtmlStructure } from "./scripts/html-structure/createHtmlStructure";
import { showNewWord } from "./scripts/word/showNewWord";

const questions = getQuestionsWithIds();
const { gallowImage, attemptCounter, wordContainer, hintText } =
  createHtmlStructure();

const { randomQuestion, wordNodes } = showNewWord(
  questions,
  wordContainer,
  hintText
);

console.log(
  `Answer: ${randomQuestion.answer.toUpperCase().split("").join(" ")}`
);

console.log(gallowImage, attemptCounter, wordNodes);

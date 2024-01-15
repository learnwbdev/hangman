import "./sass/style.scss";
import { getQuestionsWithIds } from "./scripts/questions/getQuestionsWithIds";
import { getRandomQuestion } from "./scripts/questions/getRandomQuestion";
import { createHtmlStructure } from "./scripts/html-structure/createHtmlStructure";
import { createLettersForWord } from "./scripts/html-structure/components/createLettersForWord";

const questions = getQuestionsWithIds();
const randomQuestion = getRandomQuestion(questions);

const { gallowImage, attemptCounter, wordContainer } = createHtmlStructure();
const wordNodes = createLettersForWord(wordContainer, randomQuestion.answer);

console.log(
  `Answer: ${randomQuestion.answer.toUpperCase().split("").join(" ")}`
);

console.log(gallowImage, attemptCounter, wordNodes);

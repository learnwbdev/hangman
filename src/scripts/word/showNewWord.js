import { createLettersForWord } from "../html-structure/components/createLettersForWord";
import { getRandomQuestion } from "../questions/getRandomQuestion";
import { setRandomQuestion, setWordNodesArray } from "./getSetCurrentWord";
import { wordContainer, hintText } from "../html-structure/createHtmlStructure";
import { resetAttemptCounter } from "../counter/resetAttemptCounter";

export const showNewWord = () => {
  resetAttemptCounter();
  const newRandomQuestion = getRandomQuestion();
  const wordNodes = createLettersForWord(
    wordContainer,
    newRandomQuestion.answer
  );

  setRandomQuestion(newRandomQuestion);
  setWordNodesArray(wordNodes);
  hintText.append(newRandomQuestion.hint);

  console.log(
    `Answer: ${newRandomQuestion.answer.toUpperCase().split("").join(" ")}`
  );
};

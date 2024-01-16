import { createLettersForWord } from "../html-structure/components/createLettersForWord";
import { getRandomQuestion } from "../questions/getRandomQuestion";
import { setRandomQuestion, setWordNodesArray } from "./getSetCurrentWord";
import { wordContainer, hintText } from "../html-structure/createHtmlStructure";
import { resetViewFromLastWord } from "./resetViewFromLastWord";

export const showNewWord = () => {
  resetViewFromLastWord();
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

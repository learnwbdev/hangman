import { createLettersForWord } from "../html-structure/components/createLettersForWord";
import { getRandomQuestion } from "../questions/getRandomQuestion";

export const showNewWord = (questions, wordContainer, hintText) => {
  const randomQuestion = getRandomQuestion(questions);
  const wordNodes = createLettersForWord(wordContainer, randomQuestion.answer);
  hintText.append(randomQuestion.hint);

  return { randomQuestion, wordNodes };
};

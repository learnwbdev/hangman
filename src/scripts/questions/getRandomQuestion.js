import { idSymbol } from "../common-variables";
import { questions } from "./getQuestionsWithIds";

export const getRandomQuestion = () => {
  const questionsQty = questions.length;
  const randomId = Math.floor(Math.random() * questionsQty);

  const randomQuestion = questions.find(
    (question) => question[idSymbol] === randomId
  );

  return randomQuestion;
};

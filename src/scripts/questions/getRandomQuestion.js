import { idSymbol } from "../common-variables";

export const getRandomQuestion = (questions) => {
  const questionsQty = questions.length;
  const randomId = Math.floor(Math.random() * questionsQty);

  const randomQuestion = questions.find(
    (question) => question[idSymbol] === randomId
  );

  return randomQuestion;
};

import { idSymbol } from "../common-variables";
import QuestionsData from "../../data/questions.json";

export const getQuestionsWithIds = () => {
  const QuestionsDataWithIds = QuestionsData.map((question, idx) => {
    const questionWithId = { ...question };
    questionWithId[idSymbol] = idx;
    return questionWithId;
  });

  return QuestionsDataWithIds;
};

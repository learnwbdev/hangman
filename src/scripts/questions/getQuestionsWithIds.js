import { idSymbol } from "../common-variables";
import QuestionsData from "../../data/questions.json";

const getQuestionsWithIds = () => {
  const QuestionsDataWithIds = QuestionsData.map((question, idx) => {
    const questionWithId = { ...question };
    questionWithId[idSymbol] = idx;
    return questionWithId;
  });

  return QuestionsDataWithIds;
};

const questions = getQuestionsWithIds();

export { questions };

const currentWord = {
  question: {},
  letterNodes: [],
};

const setRandomQuestion = (newRandomQuestion) => {
  currentWord.question = newRandomQuestion;
};

const setWordNodesArray = (newWordNodesArray) => {
  currentWord.letterNodes = newWordNodesArray;
};

export { currentWord, setRandomQuestion, setWordNodesArray };

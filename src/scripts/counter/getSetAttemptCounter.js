const maxWrongAnswers = 6;

const attemptCounter = {
  value: 0,
};

const setAttemptCounter = (newValue) => {
  attemptCounter.value = newValue;
};

export { attemptCounter, setAttemptCounter, maxWrongAnswers };

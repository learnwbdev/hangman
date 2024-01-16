import { attemptCounterNode } from "../html-structure/createHtmlStructure";
import { showModalEndGame } from "../modals/showModalEndGame";

const attemptCounter = {
  value: 0,
};

const setAttemptCounter = (newValue) => {
  attemptCounter.value = newValue;
  attemptCounterNode.textContent = attemptCounter.value.toString();
  if (attemptCounter.value === 1) {
    attemptCounterNode.classList.add("attempt__wrong_nonzero");
  } else if (attemptCounter.value === 6) {
    const isGameOver = true;
    showModalEndGame(isGameOver);
  }
};

const increaseAttemptCounterByOne = () => {
  setAttemptCounter(attemptCounter.value + 1);
};

export { attemptCounter, setAttemptCounter, increaseAttemptCounterByOne };

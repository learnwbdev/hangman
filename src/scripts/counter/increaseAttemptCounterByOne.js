import { attemptCounter, setAttemptCounter } from "./getSetAttemptCounter";
import { attemptCounterNode } from "../html-structure/createHtmlStructure";
import { showModalRestart } from "../modals/modal-restart/showModalRestart";
import { addElementToHangman } from "./addElementToHangman";

export const increaseAttemptCounterByOne = () => {
  const maxWringGuesses = 6;
  const firstWrongGuess = 1;
  setAttemptCounter(attemptCounter.value + 1);
  attemptCounterNode.textContent = attemptCounter.value.toString();
  addElementToHangman(attemptCounter.value);
  if (attemptCounter.value === firstWrongGuess) {
    attemptCounterNode.classList.add("attempt__wrong_nonzero");
  } else if (attemptCounter.value === maxWringGuesses) {
    const isGameOver = true;
    setTimeout(() => showModalRestart(isGameOver), 400);
  }
};

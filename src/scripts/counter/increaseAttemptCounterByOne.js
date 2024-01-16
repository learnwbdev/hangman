import {
  attemptCounter,
  setAttemptCounter,
  maxWrongAnswers,
} from "./getSetAttemptCounter";
import { attemptCounterNode } from "../html-structure/createHtmlStructure";
import { showModalRestart } from "../modals/modal-restart/showModalRestart";
import { addElementToHangman } from "./addElementToHangman";

export const increaseAttemptCounterByOne = () => {
  const firstWrongAnswer = 1;
  // when user clicked on the keypad while modal window is opened
  if (attemptCounter.value >= maxWrongAnswers) {
    return;
  }
  setAttemptCounter(attemptCounter.value + 1);
  attemptCounterNode.textContent = attemptCounter.value.toString();
  addElementToHangman(attemptCounter.value);
  if (attemptCounter.value === firstWrongAnswer) {
    attemptCounterNode.classList.add("attempt__wrong_nonzero");
  } else if (attemptCounter.value === maxWrongAnswers) {
    const isGameOver = true;
    setTimeout(() => showModalRestart(isGameOver), 400);
  }
};

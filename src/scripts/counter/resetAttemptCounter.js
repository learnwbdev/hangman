import { attemptCounter, setAttemptCounter } from "./getSetAttemptCounter";
import { attemptCounterNode } from "../html-structure/createHtmlStructure";

export const resetAttemptCounter = () => {
  setAttemptCounter(0);
  attemptCounterNode.textContent = attemptCounter.value.toString();
  attemptCounterNode.classList.remove("attempt__wrong_nonzero");
};

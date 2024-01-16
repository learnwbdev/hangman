import { attemptCounter, setAttemptCounter } from "./getSetAttemptCounter";
import { attemptCounterNode } from "../html-structure/createHtmlStructure";

const resetAttemptCounter = () => {
  setAttemptCounter(0);
  attemptCounterNode.textContent = attemptCounter.value.toString();
  attemptCounterNode.classList.remove("attempt__wrong_nonzero");
};

export { resetAttemptCounter };

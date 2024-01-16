import { resetAttemptCounter } from "../counter/resetAttemptCounter";
import { resetHangmanView } from "../counter/resetHangmanView";
import { hintText, wordContainer } from "../html-structure/createHtmlStructure";
import { enableAllKeypadNodes } from "../html-structure/createKeypad";

export const resetViewFromLastWord = () => {
  resetAttemptCounter();
  wordContainer.replaceChildren();
  enableAllKeypadNodes();
  hintText.replaceChildren();
  resetHangmanView();
};

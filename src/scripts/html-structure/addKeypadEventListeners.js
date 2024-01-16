import { checkKeyDownEvent } from "../keypad/checkKeyDownEvent";
import { handleKeyNodeClickEvent } from "../keypad/handleKeyNodeClickEvent";
import { keypadNodes } from "./createKeypad";

document.addEventListener("keydown", (event) =>
  checkKeyDownEvent(event, keypadNodes)
);

keypadNodes.forEach(({ letter, node: keyNode }, idx) => {
  keyNode.addEventListener("click", (event) =>
    handleKeyNodeClickEvent(event, letter, idx)
  );
});

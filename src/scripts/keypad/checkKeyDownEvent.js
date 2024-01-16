import { keyPadLetters } from "../common-variables";
import { showModalOnlyEngLetters } from "../modals/modal-lang/showModalOnlyEngLetters";

export const checkKeyDownEvent = (event, keypadNodes) => {
  const keyPressed = event.key;
  if (typeof keyPressed === "undefined") {
    return;
  }
  if (
    keyPressed === "Shift" ||
    keyPressed === "Alt" ||
    keyPressed === "Control"
  ) {
    return;
  }

  const keyPressedUpper = keyPressed.toUpperCase();
  const letterIdx = keyPadLetters.indexOf(keyPressedUpper);
  if (letterIdx >= 0) {
    keypadNodes[letterIdx].node.dispatchEvent(new Event("click"));
  } else {
    showModalOnlyEngLetters();
  }
};

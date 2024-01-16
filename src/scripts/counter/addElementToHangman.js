import { hangmanNodesArray } from "./getHangmanNodes";

export const addElementToHangman = (currentAttempt) => {
  // when user clicked on the keypad while modal window is opened
  if (currentAttempt > hangmanNodesArray.length) {
    return;
  }
  const nodeToDraw = hangmanNodesArray[currentAttempt - 1];
  // stroke-opacity for circle (head)
  const attributeStr =
    currentAttempt - 1 === 0 ? "stroke-opacity" : "fill-opacity";
  nodeToDraw.setAttribute(attributeStr, "0.95");
};

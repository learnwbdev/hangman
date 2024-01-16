import { createKeyNode } from "./createKeyNode";
import { keyPadLetters } from "../../common-variables";

export const createKeysForKeypad = (keypadContainer) => {
  const keypadNodes = keyPadLetters.map((letter) => {
    const keyNode = createKeyNode(letter);
    keypadContainer.appendChild(keyNode);
    return { letter, node: keyNode, active: true };
  });

  return keypadNodes;
};

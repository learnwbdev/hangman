import { createElementWithClasses } from "../createElementWithClasses";

export const createKeyNode = (keyLetter) => {
  const keyNode = createElementWithClasses("button", "keypad__key");
  keyNode.append(keyLetter);

  return keyNode;
};

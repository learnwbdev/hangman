import { appContainer } from "./createHtmlStructure";
import { addKeypadSection } from "./layout/addKeypadSection";
import { createKeysForKeypad } from "./components/createKeysForKeypad";

const keypadContainer = addKeypadSection(appContainer);
const keypadNodes = createKeysForKeypad(keypadContainer);

const disableKeypadNode = (keyIndex) => {
  keypadNodes[keyIndex].active = false;
  keypadNodes[keyIndex].node.disabled = true;
  keypadNodes[keyIndex].node.classList.add("keypad__key_inactive");
};

const enableAllKeypadNodes = () => {
  keypadNodes.forEach((_, keyIndex) => {
    keypadNodes[keyIndex].active = true;
    keypadNodes[keyIndex].node.disabled = false;
    keypadNodes[keyIndex].node.classList.remove("keypad__key_inactive");
  });
};

const isKeypadNodeActive = (keyIndex) => {
  return keypadNodes[keyIndex].active;
};

export {
  keypadNodes,
  disableKeypadNode,
  isKeypadNodeActive,
  enableAllKeypadNodes,
};

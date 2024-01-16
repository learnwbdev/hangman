import { createElementWithClasses } from "../createElementWithClasses";

export const addKeypadSection = (parentElement) => {
  const keypadSection = createElementWithClasses("section", "keypad");
  const keypadContainer = createElementWithClasses("div", "keypad__container");

  keypadSection.appendChild(keypadContainer);
  parentElement.appendChild(keypadSection);

  return keypadContainer;
};

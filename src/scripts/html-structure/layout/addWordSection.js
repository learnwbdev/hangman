import { createElementWithClasses } from "../createElementWithClasses";

export const addWordSection = (parentElement) => {
  const wordSection = createElementWithClasses("section", "word");
  const wordContainer = createElementWithClasses("div", "word__container");
  wordSection.appendChild(wordContainer);
  parentElement.appendChild(wordSection);

  return wordContainer;
};

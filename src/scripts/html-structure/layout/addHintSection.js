import { createElementWithClasses } from "../createElementWithClasses";

export const addHintSection = (parentElement) => {
  const hintSection = createElementWithClasses("section", "hint");
  const hintContainer = createElementWithClasses("div", "hint__container");
  const hintTitle = createElementWithClasses("h2", "hint__title");
  hintTitle.append("Hint");
  const hintText = createElementWithClasses("div", "hint__text");
  hintContainer.append(hintTitle, hintText);
  hintSection.appendChild(hintContainer);
  parentElement.appendChild(hintSection);

  return hintText;
};

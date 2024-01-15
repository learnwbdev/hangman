import { createElementWithClasses } from "../createElementWithClasses";

export const addHeader = (appContainer) => {
  const header = createElementWithClasses("header", ["header"]);
  const headerTitle = createElementWithClasses("h1", ["header__title"]);
  headerTitle.textContent = "Hangman Game";
  header.appendChild(headerTitle);
  appContainer.appendChild(header);
};

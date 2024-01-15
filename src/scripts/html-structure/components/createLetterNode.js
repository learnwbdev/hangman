import { createElementWithClasses } from "../createElementWithClasses";

export const createLetterNode = () => {
  const letterNode = createElementWithClasses("div", "letter word__letter");
  const line = createElementWithClasses("div", "letter__line");
  letterNode.appendChild(line);

  return letterNode;
};

import { createElementWithClasses } from "../createElementWithClasses";

export const addCounterSection = (parentElement) => {
  const counterSection = createElementWithClasses("section", ["counter"]);
  const counterContainer = createElementWithClasses("div", [
    "counter__container",
  ]);
  const counterTitle = createElementWithClasses("div", ["counter__title"]);
  const counterAttempts = createElementWithClasses("div", [
    "attempt",
    "counter__attempts",
  ]);
  const attemptWrong = createElementWithClasses("span", ["attempt__wrong"]);
  const attemptLine = createElementWithClasses("span", ["attempt__line"]);
  const attemptAll = createElementWithClasses("span", ["attempt__all"]);
  counterTitle.append("Incorrect guesses:");
  attemptWrong.append("0");
  attemptLine.append("/");
  attemptAll.append("6");

  counterAttempts.append(attemptWrong, attemptLine, attemptAll);
  counterContainer.append(counterTitle, counterAttempts);
  counterSection.appendChild(counterContainer);
  parentElement.appendChild(counterSection);

  return attemptWrong;
};

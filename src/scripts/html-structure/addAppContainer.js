import { createElementWithClasses } from "./createElementWithClasses";

export const addAppContainer = (body) => {
  const appContainer = createElementWithClasses("div", ["app-container"]);
  body.appendChild(appContainer);

  return appContainer;
};

import { addAppContainer } from "./addAppContainer";
import { addHeader } from "./layout/addHeader";
import { addGallowSection } from "./layout/addGallowSection";
import { addCounterSection } from "./layout/addCounterSection";
import { addWordSection } from "./layout/addWordSection";

export const createHtmlStructure = () => {
  const { body } = document;
  body.classList.add("page");

  const appContainer = addAppContainer(body);
  addHeader(appContainer);
  const gallowImage = addGallowSection(appContainer);
  const attemptCounter = addCounterSection(appContainer);
  const wordContainer = addWordSection(appContainer);

  return { gallowImage, attemptCounter, wordContainer };
};

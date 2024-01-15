import { createElementWithClasses } from "../createElementWithClasses";
import GallowImage from "../../../assets/images/gallow-with-hangman.svg";

export const addGallowSection = (parentElement) => {
  const gallowSection = createElementWithClasses("section", ["gallow"]);
  const gallowContainer = createElementWithClasses("div", ["gallow__image"]);
  gallowContainer.innerHTML = GallowImage;
  gallowSection.appendChild(gallowContainer);
  parentElement.appendChild(gallowSection);

  return gallowContainer;
};

export const createElementWithClasses = (tagName, classListArray) => {
  const elementWithClasses = document.createElement(tagName);
  if (classListArray) {
    elementWithClasses.classList.add(...classListArray);
  }

  return elementWithClasses;
};

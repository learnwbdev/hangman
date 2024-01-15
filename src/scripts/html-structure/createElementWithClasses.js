export const createElementWithClasses = (tagName, classListString) => {
  const elementWithClasses = document.createElement(tagName);
  if (classListString && classListString !== "") {
    elementWithClasses.classList.add(...classListString.split(" "));
  }

  return elementWithClasses;
};

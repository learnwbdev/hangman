import { createElementWithClasses } from "../createElementWithClasses";

const msgOnlyEng = createElementWithClasses(
  "div",
  "msg-only-eng msg-only-eng_hidden"
);
msgOnlyEng.append(
  "Please, switch to the English layout to enter English Latin letter."
);

document.body.appendChild(msgOnlyEng);

export { msgOnlyEng };

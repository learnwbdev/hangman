import { createElementWithClasses } from "../../html-structure/createElementWithClasses";
import { appContainer } from "../../html-structure/createHtmlStructure";
import { showNewWord } from "../../word/showNewWord";

const modalRestart = createElementWithClasses("section", "modal-restart");
const modalContainer = createElementWithClasses(
  "div",
  "modal-restart__container"
);
const modalBackdrop = createElementWithClasses(
  "div",
  "modal-restart__backdrop"
);
const modalHeader = createElementWithClasses("div", "modal-restart__header");
const modalTitle = createElementWithClasses("div", "modal-restart__title");
const modalImage = createElementWithClasses("img", "modal-restart__image");
modalHeader.append(modalTitle, modalImage);
const modalSubtitle = createElementWithClasses(
  "div",
  "modal-restart__subtitle"
);
const modalText = createElementWithClasses("div", "modal-restart__text");
const modalAnswer = createElementWithClasses("div", "modal-restart__answer");
const modalPlayAgainBtn = createElementWithClasses(
  "button",
  "modal-restart__button"
);

const closeModalRestart = () => {
  console.log("click");
  const htmlBody = document.body;
  htmlBody.classList.remove("page_no-scroll");
  modalRestart.classList.remove("modal__restart_open");
  modalTitle.replaceChildren();
  modalSubtitle.replaceChildren();
  modalAnswer.replaceChildren();
  modalImage.src = "";
  modalImage.alt = "";
  showNewWord();
};

modalPlayAgainBtn.addEventListener("click", () => closeModalRestart());

modalText.append("The correct word:");
modalPlayAgainBtn.append("Play again");
modalContainer.append(
  modalTitle,
  modalImage,
  modalSubtitle,
  modalText,
  modalAnswer,
  modalPlayAgainBtn
);
modalRestart.append(modalContainer, modalBackdrop);
const modalRestartNodes = {
  container: modalContainer,
  title: modalTitle,
  img: modalImage,
  subtitle: modalSubtitle,
  text: modalText,
  answer: modalAnswer,
  button: modalPlayAgainBtn,
};

appContainer.append(modalRestart);

export { modalRestart, modalRestartNodes };

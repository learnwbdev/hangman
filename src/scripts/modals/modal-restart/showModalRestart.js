import ImageGameOver from "../../../assets/images/game-over.png";
import ImageGameOWin from "../../../assets/images/game-win.png";
import { modalRestart, modalRestartNodes } from "./createModalRestart";
import { currentWord } from "../../word/getSetCurrentWord";

export const showModalRestart = (isGameOver) => {
  modalRestartNodes.img.src = isGameOver ? ImageGameOver : ImageGameOWin;
  modalRestartNodes.img.alt = isGameOver ? "white scull" : "top black hat with";
  modalRestartNodes.title.append(isGameOver ? "game over" : "you win!");
  modalRestartNodes.subtitle.append(
    isGameOver
      ? "Whooops... You were too late..."
      : "Congratulations! Hats off to you."
  );
  modalRestartNodes.answer.append(currentWord.question.answer);

  if (isGameOver) {
    modalRestartNodes.container.classList.remove(
      "modal-restart__container_win"
    );
    modalRestartNodes.subtitle.classList.remove(
      "modal-restart__subtitle_basic"
    );
    modalRestartNodes.text.classList.remove("modal-restart__text_lighter");
    modalRestartNodes.answer.classList.remove("modal-restart__answer_lighter");
  } else {
    modalRestartNodes.container.classList.add("modal-restart__container_win");
    modalRestartNodes.subtitle.classList.add("modal-restart__subtitle_basic");
    modalRestartNodes.text.classList.add("modal-restart__text_lighter");
    modalRestartNodes.answer.classList.add("modal-restart__answer_lighter");
  }

  const htmlBody = document.body;
  htmlBody.classList.add("page_no-scroll");
  modalRestart.classList.add("modal__restart_open");
};

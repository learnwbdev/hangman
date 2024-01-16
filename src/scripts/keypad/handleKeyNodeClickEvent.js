import { increaseAttemptCounterByOne } from "../counter/increaseAttemptCounterByOne";
import { currentWord } from "../word/getSetCurrentWord";
import {
  disableKeypadNode,
  isKeypadNodeActive,
} from "../html-structure/createKeypad";
import { showModalRestart } from "../modals/modal-restart/showModalRestart";
import {
  attemptCounter,
  maxWrongAnswers,
} from "../counter/getSetAttemptCounter";

export const handleKeyNodeClickEvent = (event, pressedLetter, keyNodeIndex) => {
  const eventKeyNode = event.target;
  if (typeof eventKeyNode === "undefined") {
    return;
  }
  if (!isKeypadNodeActive(keyNodeIndex)) {
    return;
  }
  if (attemptCounter.value >= maxWrongAnswers) {
    return;
  }
  const answerLetters = currentWord.question
    ? currentWord.question.answer.toUpperCase().split("")
    : [""];
  const pressedLetterUpper = pressedLetter.toUpperCase();

  if (answerLetters.includes(pressedLetterUpper)) {
    answerLetters.forEach((letter, idx) => {
      if (letter === pressedLetterUpper) {
        currentWord.letterNodes[idx].isOpen = true;
        const letterNode = currentWord.letterNodes[idx].node;
        letterNode.classList.add("word__letter_open");
        letterNode.append(letter);
      }
    });
    const isAllLettersOpen = currentWord.letterNodes.every(
      (letterNode) => letterNode.isOpen
    );
    if (isAllLettersOpen) {
      const isGameOver = false;
      showModalRestart(isGameOver);
    }
  } else {
    increaseAttemptCounterByOne();
  }

  disableKeypadNode(keyNodeIndex);
};

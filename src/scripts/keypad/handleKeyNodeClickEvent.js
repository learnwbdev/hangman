import { increaseAttemptCounterByOne } from "../counter/getSetAttemptCounter";
import { currentWord } from "../word/getSetCurrentWord";
import {
  disableKeypadNode,
  isKeypadNodeActive,
} from "../html-structure/createKeypad";

export const handleKeyNodeClickEvent = (event, pressedLetter, keyNodeIndex) => {
  const eventKeyNode = event.target;
  if (typeof eventKeyNode === "undefined") {
    return;
  }
  if (!isKeypadNodeActive(keyNodeIndex)) {
    return;
  }
  const answerLetters = currentWord.question
    ? currentWord.question.answer.toUpperCase().split("")
    : [""];
  const pressedLetterUpper = pressedLetter.toUpperCase();

  if (answerLetters.includes(pressedLetterUpper)) {
    answerLetters.forEach((letter, idx) => {
      if (letter === pressedLetterUpper) {
        const letterNode = currentWord.letterNodes[idx].node;
        letterNode.classList.add("word__letter_open");
        letterNode.append(letter);
      }
    });
  } else {
    increaseAttemptCounterByOne();
  }

  disableKeypadNode(keyNodeIndex);
};

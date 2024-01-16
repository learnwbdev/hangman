import { createLetterNode } from "./createLetterNode";

export const createLettersForWord = (wordContainer, word) => {
  const wordArray = word.split("").map((letter) => {
    const letterNode = createLetterNode();
    wordContainer.appendChild(letterNode);
    return { letter, node: letterNode, isOpen: false };
  });

  return wordArray;
};

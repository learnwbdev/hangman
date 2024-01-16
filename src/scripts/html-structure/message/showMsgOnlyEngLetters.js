import { msgOnlyEng } from "./createMsgOnlyEngLetters";

const showMsgOnlyEngLetters = () => {
  msgOnlyEng.classList.remove("msg-only-eng_hidden");
};

const hideMsgOnlyEngLetters = () => {
  msgOnlyEng.classList.add("msg-only-eng_hidden");
};

export { showMsgOnlyEngLetters, hideMsgOnlyEngLetters };

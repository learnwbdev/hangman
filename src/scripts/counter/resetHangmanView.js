import { hangmanNodesArray } from "./getHangmanNodes";

export const resetHangmanView = () => {
  hangmanNodesArray.forEach((node, idx) => {
    const attributeStr = idx === 0 ? "stroke-opacity" : "fill-opacity";
    node.setAttribute(attributeStr, "0");
  });
};

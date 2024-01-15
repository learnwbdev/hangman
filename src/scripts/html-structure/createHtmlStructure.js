import { addAppContainer } from "./addAppContainer";
import { addHeader } from "./layout/addHeader";

const { body } = document;
body.classList.add("page");

const appContainer = addAppContainer(body);
addHeader(appContainer);

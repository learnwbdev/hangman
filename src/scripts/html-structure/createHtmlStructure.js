import { addAppContainer } from "./addAppContainer";
import { addHeader } from "./layout/addHeader";
import { addGallowSection } from "./layout/addGallowSection";

const { body } = document;
body.classList.add("page");

const appContainer = addAppContainer(body);
addHeader(appContainer);
addGallowSection(appContainer);

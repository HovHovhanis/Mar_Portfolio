import { createDomain } from "effector";
import { AllowedLang } from "../constants/language";

// Create the Effector domain
const lang = createDomain();

// Create the event for setting the language with the AllowedLang type
export const setLang = lang.createEvent();

// Optionally, create a store to hold the language value (optional, if you need to track the state of the language)
export const $currentLang = lang.createStore(AllowedLang.ENG)
    .on(setLang, (state, newLang) => newLang);


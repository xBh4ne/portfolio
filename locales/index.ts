import en from "./en.json";
import it from "./it.json";

const locales = { en, it } as const;

export type Lang = "en" | "it";
export type Translations = typeof en;

export default locales;

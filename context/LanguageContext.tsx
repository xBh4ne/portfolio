"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import locales, { Lang, Translations } from "@/locales";

interface LanguageContextType {
	lang: Lang;
	t: Translations;
	setLang: (lang: Lang) => void;
	toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Lang>("it");
	const t: Translations = locales[lang];
	const toggleLang = () => setLang((prev) => (prev === "en" ? "it" : "en"));

	return (
		<LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context)
		throw new Error("useLanguage must be used within a LanguageProvider");
	return context;
};

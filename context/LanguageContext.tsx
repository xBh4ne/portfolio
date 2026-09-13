"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import locales, { Lang, Translations } from "@/locales";

interface LanguageContextType {
	lang: Lang;
	t: Translations;
	ready: boolean; // 👈 aggiunto
	setLang: (lang: Lang) => void;
	toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

const SUPPORTED_LANGS: Lang[] = ["en", "it"];

function detectLang(): Lang {
	const browserLang = navigator.language.slice(0, 2);
	return SUPPORTED_LANGS.includes(browserLang as Lang)
		? (browserLang as Lang)
		: "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Lang>("en");
	const [ready, setReady] = useState(false); // 👈 aggiunto

	useEffect(() => {
		setLang(detectLang());
		setReady(true); // 👈 lingua rilevata, ora è pronto
	}, []);

	const t: Translations = locales[lang];
	const toggleLang = () => setLang((prev) => (prev === "en" ? "it" : "en"));

	return (
		<LanguageContext.Provider value={{ lang, setLang, toggleLang, t, ready }}>
			{/* 👇 non renderizza nulla finché la lingua non è pronta */}
			{ready ? children : null}
		</LanguageContext.Provider>
	);
}

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context)
		throw new Error("useLanguage must be used within a LanguageProvider");
	return context;
};

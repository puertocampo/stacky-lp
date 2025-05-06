"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  memo,
} from "react";
import { translations } from "../translations";

type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // ブラウザ環境でのみlocalStorageにアクセス
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      return savedLanguage || "en";
    }
    return "en";
  });

  // 言語が変更されたときにlocalStorageに保存
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = useCallback(
    (newLanguage: Language) => {
      if (newLanguage !== language) {
        setLanguageState(newLanguage);
      }
    },
    [language]
  );

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = useCallback(() => {
    setLanguage(language === "en" ? "ja" : "en");
  }, [language, setLanguage]);

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {language === "en" ? "日本語" : "English"}
    </button>
  );
});

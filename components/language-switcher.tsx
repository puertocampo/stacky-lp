"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/contexts/language-context";
import { memo } from "react";

export const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ja" : "en")}
      className="px-2"
    >
      {language === "en" ? "日本語" : "English"}
    </Button>
  );
});

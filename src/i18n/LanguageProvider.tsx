"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LANG, isLang, tr, ui, type Lang, type Text } from "./i18n";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LanguageContext = createContext<Ctx>({ lang: DEFAULT_LANG, setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Trang được build sẵn (static export) bằng ngôn ngữ mặc định.
  // Sau khi chạy trên trình duyệt, đọc lựa chọn đã lưu rồi đổi sang ngôn ngữ đó.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (isLang(saved)) setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }, []);

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

/** Dùng trong component: `const { t, ui } = useLang()` rồi `t(project.title)`, `ui.hero.cta` */
export function useLang() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = useCallback((text: Text) => tr(text, lang), [lang]);
  return { lang, setLang, t, ui: ui[lang] };
}

"use client";

import { useLang } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/i18n";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "vi", label: "VIE" },
];

// Công tắc 2 nấc cùng kiểu kính với nút sáng/tối: một "núm" đặc trượt sang nấc đang chọn.
export default function LanguageToggle() {
  const { lang, setLang, ui } = useLang();
  const index = options.findIndex((o) => o.value === lang);

  return (
    <div role="radiogroup" aria-label={ui.nav.switchLang} className="glass relative flex h-8 shrink-0 items-center rounded-full p-1">
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-1 w-10 rounded-full bg-fg shadow-md transition-transform duration-300"
        style={{ transform: `translateX(${index * 100}%)` }}
      />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={lang === o.value}
          onClick={() => setLang(o.value)}
          className={`relative z-10 w-10 cursor-pointer text-center text-[11px] font-semibold tracking-wide transition-colors duration-300 ${
            lang === o.value ? "text-bg" : "text-muted hover:text-fg"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

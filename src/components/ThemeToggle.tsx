"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setReady(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Chuyển chế độ sáng/tối"
      onClick={toggle}
      className="glass relative h-8 w-15 shrink-0 cursor-pointer rounded-full"
    >
      <span
        className={`absolute top-1/2 left-1 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg shadow-md ${
          ready ? "transition-transform duration-300" : ""
        } ${dark ? "translate-x-7" : "translate-x-0"}`}
      >
        {dark ? (
          <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </span>
    </button>
  );
}

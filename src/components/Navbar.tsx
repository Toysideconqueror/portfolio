"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navItems, profile, type SectionId } from "@/data/content";
import { useLang } from "@/i18n/LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

/**
 * Scroll-spy: tìm mục đang được xem.
 * Mỗi lần cuộn, lấy mục cuối cùng có mép trên đã đi qua "vạch đọc" (35% chiều cao màn hình).
 * Khi đã cuộn chạm đáy trang thì chọn mục cuối (Contact), vì mục ngắn có thể không bao giờ chạm vạch.
 */
function useActiveSection(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current: SectionId | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = ids[ids.length - 1];
      setActive(current);
    };
    // requestAnimationFrame gom nhiều sự kiện scroll trong một khung hình thành một lần tính.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { ui, lang } = useLang();
  const active = useActiveSection(navItems);

  // Vòng sáng là MỘT phần tử duy nhất trượt giữa các link: đo vị trí link đang active rồi đặt left/width.
  const listRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const measure = () => {
      const link = active ? listRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`) : null;
      setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
    };
    measure();
    // Đổi ngôn ngữ làm chữ dài/ngắn đi, nên đo lại cả khi lang thay đổi và khi đổi kích thước cửa sổ.
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active, lang]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-2">
        <a
          href="#top"
          aria-label={ui.nav.home}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-fg text-[13px] font-bold tracking-tight text-bg shadow-md transition-transform hover:scale-105"
        >
          {profile.initials}
        </a>

        <ul ref={listRef} className="relative hidden items-center gap-1 md:flex">
          <li
            aria-hidden
            className={`nav-glow pointer-events-none absolute inset-y-0 rounded-full ${pill ? "opacity-100" : "opacity-0"}`}
            style={pill ? { left: pill.left, width: pill.width } : undefined}
          />
          {navItems.map((id) => (
            // data-id đặt trên <li>: offsetLeft của <li> được tính so với <ul> (phần tử relative gần nhất).
            <li key={id} data-id={id} className="relative">
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`block rounded-full px-3 py-1.5 text-sm transition-colors duration-300 ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {ui.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="glass flex size-8 items-center justify-center rounded-full md:hidden"
            aria-label={ui.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="glass mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl p-2 md:hidden">
          {navItems.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "location" : undefined}
                className={`block rounded-2xl px-4 py-3 text-sm ${active === id ? "nav-glow-static" : ""}`}
              >
                {ui.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

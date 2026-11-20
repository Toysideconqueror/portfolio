"use client";

import { useState } from "react";
import { navItems, profile } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-5">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.name.split(" ").pop()}
          <span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="glass flex size-8 items-center justify-center rounded-full md:hidden"
            aria-label="Mở menu"
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
        <ul className="glass mx-auto mt-2 flex max-w-5xl flex-col rounded-3xl p-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-sm">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import { profile } from "@/data/content";
import GlassCard from "../GlassCard";
import { useLang } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t, ui } = useLang();
  return (
    <section id="top" className="mx-auto flex min-h-svh max-w-6xl items-center px-5 pt-28 pb-16 sm:px-8">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
            <span className="size-2 rounded-full bg-fg" /> {ui.hero.available}
          </p>
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight sm:text-7xl">
            {ui.hero.greeting}
            <br />
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
            {t(profile.role)}. {t(profile.tagline)}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-80">
              {ui.hero.viewProjects}
            </a>
            <a href="#contact" className="glass glass-hover rounded-full px-6 py-3 text-sm font-medium">
              {ui.hero.contact}
            </a>
          </div>
        </div>

        <GlassCard className="aspect-square w-full max-w-sm justify-self-center p-6 lg:justify-self-end">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-xs text-muted">
              <span>portfolio.ts</span>
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full border border-current" />
                <span className="size-2.5 rounded-full border border-current" />
                <span className="size-2.5 rounded-full bg-current" />
              </span>
            </div>
            {/* next/image: với output "export" và images.unoptimized, ảnh được dùng nguyên file trong public/ */}
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={320}
              height={320}
              priority
              className="mx-auto size-40 rounded-full border border-line object-cover sm:size-48"
            />
            <pre className="font-mono text-xs leading-relaxed text-muted">
              {`const me = {\n  role: "${t(profile.role)}",\n  based: "${t(profile.location)}",\n};`}
            </pre>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

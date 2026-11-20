"use client";

import { projects } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";
import { useLang } from "@/i18n/LanguageProvider";

export default function Projects() {
  const { t, ui } = useLang();
  return (
    <Section id="projects" index="03" title={ui.sections.projects}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <GlassCard key={i} as="article" className="flex flex-col overflow-hidden">
            <div className="flex aspect-video items-center justify-center border-b border-line font-mono text-sm text-muted">
              {ui.projects.image} {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{t(p.title)}</h3>
              <p className="mt-2 flex-1 text-muted">{t(p.description)}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="font-mono text-xs text-muted">
                    #{t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3 text-sm font-medium">
                <a href={p.demo} className="rounded-full bg-fg px-4 py-2 text-bg hover:opacity-80">
                  {ui.projects.demo}
                </a>
                <a href={p.repo} className="rounded-full border border-line px-4 py-2 hover:border-fg">
                  {ui.projects.source}
                </a>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

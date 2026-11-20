"use client";

import { skills } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";
import { useLang } from "@/i18n/LanguageProvider";

export default function Skills() {
  const { t, ui } = useLang();
  return (
    <Section id="skills" index="02" title={ui.sections.skills}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <GlassCard key={i} className="p-6">
            <h3 className="mb-4 font-mono text-sm text-muted">{t(s.group)}</h3>
            <ul className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={t(item)} className="rounded-full border border-line px-3 py-1 text-sm">
                  {t(item)}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}

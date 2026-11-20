"use client";

import { achievements, education } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";
import { useLang } from "@/i18n/LanguageProvider";

export default function Education() {
  const { t, ui } = useLang();
  return (
    <Section id="education" index="05" title={ui.sections.education}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          {education.map((ed, i) => (
            <GlassCard key={i} className="p-8">
              <span className="font-mono text-sm text-muted">{ed.period}</span>
              <h3 className="mt-2 text-2xl font-semibold">{t(ed.school)}</h3>
              <p className="mt-1 text-muted">{t(ed.degree)}</p>
            </GlassCard>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <GlassCard key={i} as="a" href={a.url} target="_blank" rel="noreferrer" className="group flex flex-col p-6">
              <span className="font-mono text-xs text-muted">
                {t(a.issuer)} · {a.year}
              </span>
              <h4 className="mt-2 flex-1 font-semibold">{t(a.title)}</h4>
              <span className="mt-4 text-sm text-muted group-hover:text-fg">{ui.education.viewCert}</span>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}

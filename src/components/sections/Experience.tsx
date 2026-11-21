"use client";

import { experience } from "@/data/content";
import GlassCard from "../GlassCard";
import TechIcon from "../TechIcon";
import Section from "../Section";
import { useLang } from "@/i18n/LanguageProvider";

export default function Experience() {
  const { t, ui } = useLang();
  return (
    <Section id="experience" index="04" title={ui.sections.experience}>
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((e, i) => (
          <li key={i} className="relative">
            <span className="absolute top-8 -left-[29px] size-3 rounded-full border-2 border-bg bg-fg sm:-left-[45px]" />
            <GlassCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {t(e.role)}{" "}
                  <span className="inline-flex items-center gap-1.5 text-muted">
                    · <TechIcon name={e.company} className="size-4" />
                    {e.company}
                  </span>
                </h3>
                <span className="font-mono text-sm text-muted">{t(e.period)}</span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                {e.points.map((pt, j) => (
                  <li key={j}>{t(pt)}</li>
                ))}
              </ul>
            </GlassCard>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import { experience } from "@/data/content";
import GlassCard from "../GlassCard";
import Section from "../Section";

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-10">
        {experience.map((e) => (
          <li key={e.role + e.period} className="relative">
            <span className="absolute top-8 -left-[29px] size-3 rounded-full border-2 border-bg bg-fg sm:-left-[45px]" />
            <GlassCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {e.role} <span className="text-muted">· {e.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted">{e.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-muted">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </GlassCard>
          </li>
        ))}
      </ol>
    </Section>
  );
}
